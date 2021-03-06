require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const mongo_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds127132.mlab.com:27132/purwadb`

const orang = require('./routes/orang')
const buku = require('./routes/buku')
const genre = require('./routes/genre')
const index = require('./routes/index') //buat login register

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/orang', orang)
app.use('/buku', buku)
app.use('/genre', genre)
app.use('/', index)
//kalo akses login / register
// localhost:3000/login
// localhost:3000/register

mongoose.connect(mongo_url, function(err, res){
  if(err) console.log(err)
  else console.log('connected to mongoose')
})

app.listen(3000)