const mongoose = require('mongoose');
const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        // required: true
    },

    artist: {
        type: String,
        required: true
    },

    audio: {
        type: String,
        required: true
    }
})

const Music = mongoose.model('Music', musicSchema);
module.exports = Music