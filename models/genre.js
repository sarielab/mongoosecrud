const mongoose = require('mongoose')

let genreSchema = mongoose.Schema({
  genre_name: String
})

let Genre = mongoose.model('tbl_genre', genreSchema)

module.exports = Genre