const mongoose = require('mongoose')

const securitySchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    noOfSecurity: { type: Number },
    price: { type: Number, required: true },
    image: { type: String},
})

const Security = mongoose.model('Security', securitySchema)

module.exports = Security