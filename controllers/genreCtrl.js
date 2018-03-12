const Genre = require('../models/genre')

const getAll = function (req, res) {
  Genre.find({})
  .exec(function(err, genres){
    if (err) res.send({err:err})
    else res.send(genres)
  })
}
const getOne = function (req, res) {
  let id = req.params.id
  Genre.findById(id)
  .exec(function(err, genre){
    if (err) res.send({err:err})
    else res.send(genre)
  })
}
const create = function (req, res) {
  let genre = new Genre({
    genre_name: req.body.genre_name
  })

  genre.save(function(err, s_genre){
    if (err) res.send({err:err})
    else res.send(s_genre)
  })
}
const update = function (req, res) {
  let id = req.params.id
  Genre.findById(id)
  .exec(function(err, genre){
    if (err) res.send({err:err})
    else {
      genre.genre_name = req.body.genre_name
      genre.save(function(err, u_genre){
        if (err) res.send({err:err})
        else res.send(u_genre)
      })
    }
  })
}

const remove = function (req, res) {
  let id = req.params.id
  Genre.findById(id)
  .exec(function(err, genre){
    if (err) res.send({err:err})
    else {
      genre.remove(function(err, d_genre){
        if (err) res.send({err:err})
        else res.send(d_genre)
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