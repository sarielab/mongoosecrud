const mongoose = require('mongoose')

let pinjamSchema = mongoose.Schema({
  _buku: {type: mongoose.Schema.ObjectId, ref:'tbl_buku'},
  _peminjam: {type: mongoose.Schema.ObjectId, ref:'tbl_orang'},
  tgl_pinjam: {
    type: Date,
    default: Date.now //kalo ga diinsert lsg dimasukin waktu sekarang
  }
})

let Pinjam = mongoose.model('tbl_pinjam', pinjamSchema)

module.exports = Pinjam