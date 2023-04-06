const mongoose = require('mongoose')

const hospitalitySchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Image, required: true },
})

const Hospitality = mongoose.model('Hospitality', hospitalitySchema)

module.exports = Hospitality