const mongoose = require('mongoose')

const DJSchema = mongoose.Schema({
    name: { type: String, required: true },
    noOfHours: { type: Number },
    price: { type: Number },
    image: { type: String}
})
const DJ = mongoose.model('DJ', DJSchema)

module.exports = DJ