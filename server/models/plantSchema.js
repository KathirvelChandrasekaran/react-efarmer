const mongoose = require('mongoose');
const plantSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    also: {
        type: String,
        required: true
    },
    alternateName: {
        type: String,
        required: true
    },
    sowInstruction: {
        type: String,
        required: true
    },
    spaceInstruction: {
        type: String,
        required: true
    },
    harvestInstruction: {
        type: String,
        required: true
    },
    compatiblePlants: {
        type: String,
        required: true
    },
    avoidInstructions: {
        type: String,
        required: true
    },
    culinaryHints: {
        type: String,
        required: true
    },
    culinaryPreservation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Plants', plantSchema);
