const router = require('express').Router()

router.get('/', (req,res)=> res.send('alive'))

module.exports = router