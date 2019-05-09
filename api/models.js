const mongoose = require('mongoose');


// eslint-disable-next-line no-unused-vars
const placeSchema = mongoose.Schema({
    name: String,
    location: String,
    capital: String,
    largestCities: [String],
    airports: [String],
    placesToVisit: [String],
    condos: [String],
    recreations: [String],
    inspirations: [String]

}, null, { cache: false, collection: 'test.places'  })


const itemSchema = mongoose.Schema({
    name: String,
    price: Number
}, null, { cache: false });

const userSchema = mongoose.Schema({
    name: String
}, null, { cache: false });

const purchaseSchema = mongoose.Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items'
    }
},  null, { cache: false });

const User = mongoose.model('users', userSchema);
const Item = mongoose.model('items', itemSchema);
const Purchase = mongoose.model('purchases', purchaseSchema);
const Place = mongoose.model('test.place', placeSchema, 'test.places');
module.exports = {
    User,
    Item,
    Purchase,
    Place
};