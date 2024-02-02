const mongoose = require('mongoose');

//toy is gonna be a sub doc not a model
//toys will exist as part of a pets toys array
//each toy will belong to 1 pet thats it.
//that makes a one to many with pet to toy

const toySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isSqueaky: {
        type: Boolean,
        required: true,
        default: false,
    },
    condition: {
        type: String,
        required: true,
        enum: ['new', 'used', 'disgusting'],
        default: 'new'
    }
    }, {
    timestamps: true
})

module.exports = toySchema;