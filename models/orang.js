const mongoose = require('mongoose')

let orangSchema = mongoose.Schema({
  nama: String,
  _buku_favorit: {type: mongoose.Schema.ObjectId, ref:'tbl_buku'}
})

let Orang = mongoose.model('tbl_orang', orangSchema)

module.exports = Orang