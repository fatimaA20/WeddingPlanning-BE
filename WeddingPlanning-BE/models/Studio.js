const mongoose = require('mongoose')

const studioSchema = mongoose.Schema({
    name: { type: String, required: true },
    packageType: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Image, required: true },
})

const Studio = mongoose.model('Studio', studioSchema)

module.exports = Studio