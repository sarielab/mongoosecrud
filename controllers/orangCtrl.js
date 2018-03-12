const Orang = require('../models/orang')

const getAll = function (req, res) {
  Orang.find({})
  .exec(function(err, orangs){
    if (err) res.send({err:err})
    else res.send(orangs)
  })
}
const getOne = function (req, res) {
  let id = req.params.id
  Orang.findById(id)
  .exec(function(err, orang){
    if (err) res.send({err:err})
    else res.send(orang)
  })
}
const create = function (req, res) {
  let orang = new Orang({
    nama: req.body.nama
  })

  orang.save(function(err, s_orang){
    if (err) res.send({err:err})
    else res.send(s_orang)
  })
}
const update = function (req, res) {
  let id = req.params.id
  Orang.findById(id)
  .exec(function(err, orang){
    if (err) res.send({err:err})
    else {
      orang.nama = req.body.nama
      orang.save(function(err, u_orang){
        if (err) res.send({err:err})
        else res.send(u_orang)
      })
    }
  })
}

const remove = function (req, res) {
  let id = req.params.id
  Orang.findById(id)
  .exec(function(err, orang){
    if (err) res.send({err:err})
    else {
      orang.remove(function(err, d_orang){
        if (err) res.send({err:err})
        else res.send(d_orang)
      })
    }
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}