const mongoose = require('mongoose')

let bukuSchema = mongoose.Schema({
  judul: String,
  _pengarang: {type: mongoose.Schema.ObjectId, ref: 'tbl_orang'},
  genre : [{type: mongoose.Schema.ObjectId, ref: 'tbl_genre'}]
})

let Buku = mongoose.model('tbl_buku', bukuSchema)

module.exports = Buku