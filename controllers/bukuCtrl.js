const Buku = require('../models/buku')

const getAll = function (req, res) {
  Buku.find({})
  .populate('_pengarang','nama')
  .populate('genre')
  .exec(function(err, bukus){
    if (err) res.send({err:err})
    else res.send(bukus)
  })
}
const getOne = function (req, res) {
  let id = req.params.id

  Buku.findById(id)
  .populate('_pengarang','nama')
  .populate('genre')
  .exec(function(err, buku){
    if (err) res.send({err:err})
    else res.send(buku)
  })
}

const create = function (req, res) {
  let buku = new Buku({
    judul: req.body.judul,
    _pengarang: req.body._pengarang,
    genre: req.body.genre
  })

  buku.save(function(err, s_buku){
    if (err) res.send({err:err})
    else res.send(s_buku)
  })
}
const update = function (req, res) {
  let id = req.params.id

  Buku.findById(id)
  .exec(function(err, buku){
    if (err) res.send({err:err})
    else {
      //kalau _pengarang dikirim di body postman maka simpan yg baru, jk tidak pake yg lama
      if(typeof req.body._pengarang !== 'undefined')
        buku._pengarang = req.body._pengarang
      if (typeof req.body.judul !== 'undefined')
        buku.judul = req.body.judul

      buku.save(function(err, u_buku){
        if (err) res.send({err:err})
        else res.send(u_buku)
      })
    }
  })
}

const updateGenre = function (req, res) {
  let id = req.params.id

  Buku.findById(id)
  .exec(function(err, buku){
    if (err) res.send({err:err})
    else {
      if(typeof req.body.genre !== 'undefined')
        buku.genre = req.body.genre
      else buku.genre = []

      buku.save(function(err, u_buku){
        if (err) res.send({err:err})
        else res.send(u_buku)
      })
    }
  })
}
const remove = function (req, res) {
  let id = req.params.id
  Buku.findById(id)
  .exec(function(err, buku){
    if (err) res.send({err:err})
    else {
      buku.remove(function(err, d_buku){
        if (err) res.send({err:err})
        else res.send(d_buku)
      })
    }
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  updateGenre,
  remove
}