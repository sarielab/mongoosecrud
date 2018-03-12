require('dotenv').config()
const app = require('express')()
const mongoose = require('mongoose')

const mongo_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds127132.mlab.com:27132/purwadb`

mongoose.connect(mongo_url, function(err, res){
  if(err) console.log(err)
  else console.log('connected to mongoose')
})

app.listen(3000)