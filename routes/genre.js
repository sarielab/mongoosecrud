const router = require('express').Router()

const genreCtrl = require('../controllers/genreCtrl')

router.get('/', genreCtrl.getAll)
router.get('/:id', genreCtrl.getOne)
router.post('/', genreCtrl.create)
router.put('/:id', genreCtrl.update)
router.delete('/:id', genreCtrl.remove)

module.exports = router
