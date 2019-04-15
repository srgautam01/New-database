const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    price: Number
});

const userSchema = mongoose.Schema({
    name: String
});

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
});

const User = mongoose.model('users', userSchema);
const Item = mongoose.model('items', itemSchema);
const Purchase = mongoose.model('purchases', purchaseSchema);

module.exports = {
    User,
    Item,
    Purchase
};