const mongoose = require('mongoose')

const buffetSchema = mongoose.Schema({
    restaurantName: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    noOfGuests: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String},
})

const Buffet = mongoose.model('Buffet', buffetSchema)

module.exports = Buffet