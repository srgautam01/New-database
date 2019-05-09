const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors');
require('./db');
const models = require('./models')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const PORT = process.env.PORT || 4002;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

// Get a single expression
app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Update an expression
app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// Create an expression
app.post('/expressions', (req, res, next) => {
  console.log(req.body);

  const receivedExpression = createElement('expressions', req.body);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// Delete an expression
app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.get('/test', async (req, res, next) => {
  // const user1 = models.User({name: 'Ajay'})
  // user1.save();
  // res.send({success: true})

  // const users = await models.User.find({})
  // res.send(users);

  const sundar = (await models.User.find({name: 'Damodar'}))[0];

  const purchases = await models.Purchase.find({user: sundar});

  const result = [];

  for(let i=0; i<purchases.length; i++) {
    const purchase = purchases[i];

    const itemId = purchase.item;
    const item = (await models.Item.find({_id: itemId}))[0];

    const userId = purchase.user;
    const user = (await models.User.find({_id: userId}))[0];

    result.push({
      userName: user.name,
      itemName: item.name,
      price: item.price,
      purchaseDate: purchase.purchaseDate
    })
  }

  res.send(result)
});

// Get all animals
app.get('/animals', (req, res, next) => {
  res.send(animals);
});

// Get a single animal
app.get('/animals/:id', (req, res, next) => {
  const animal = getElementById(req.params.id, animals);
  if (animal) {
    res.send(animal);
  } else {
    res.status(404).send();
  }
});

// Create an animal
app.post('/animals', (req, res, next) => {
  const receivedAnimal = createElement('animals', req.query);
  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});

// Update an animal
app.put('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

// Delete a single animal
app.delete('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'sundar' && password === 'abcdefgh') {
    res.send({success: true});
  }else {
    res.status(401).send({success: false});
  }

});

app.get('/search/:place', async (req, res) => {
  const { place } = req.params;


  // const placeTest = new models.Place({
  //   name: 'test'
  // })
  // await placeTest.save();

  const result = await models.Place.find({
    name: new RegExp("^"+ place.toLowerCase())
  });

  // console.log(result, placeTest);

  if (result.length == 0)res.status(404).send({success: false});
else{
    res.send({
      ...result[0]._doc
    })

  }

});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
