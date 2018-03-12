const mongoose = require('mongoose')

let orangSchema = mongoose.Schema({
  nama: String
})

let Orang = mongoose.model('tbl_orang', orangSchema)

module.exports = Orang