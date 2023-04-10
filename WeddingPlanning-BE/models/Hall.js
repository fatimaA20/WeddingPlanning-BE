const mongoose = require('mongoose')

const hallSchema = mongoose.Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    availableDate: { type: Date, required: true },
    price: { type: Number, required: true },
    image: { type: String},
})

const Hall = mongoose.model('Hall', hallSchema)

module.exports = Hall