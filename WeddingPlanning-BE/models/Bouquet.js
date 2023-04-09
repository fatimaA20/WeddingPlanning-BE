const mongoose = require('mongoose')

const bouquetSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    image: { type: Image, required: true },
})

const Bouquet = mongoose.model('Bouquet', bouquetSchema)

module.exports = Bouquet