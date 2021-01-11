var mongoose = require('mongoose');

var person = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        role: { type: String, default: 'The name of this person was null so it was saved as this string' }
    },
    age: {
        type: Number,
        role: { type: Number, default: 'guitarist' }
    },
    favouriteFoods:{
        type: [String],
        role: { type: [String], default: ['Apples', 'Oranges', 'Bananas'] }
    }
})

module.exports = mongoose.model("Person", person);