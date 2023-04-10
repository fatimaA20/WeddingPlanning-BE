const mongoose = require('mongoose')

const arrangementSchema = mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String }
})

const Arrangement = mongoose.model('Arrangement', arrangementSchema)

module.exports = Arrangement