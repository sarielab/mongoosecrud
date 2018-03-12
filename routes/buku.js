const router = require('express').Router()

const bukuCtrl = require('../controllers/bukuCtrl')

router.get('/', bukuCtrl.getAll)
router.get('/:id', bukuCtrl.getOne)
router.post('/', bukuCtrl.create)
router.put('/:id/genre', bukuCtrl.updateGenre) //biar ga dikira :id aja
router.put('/:id', bukuCtrl.update)
router.delete('/:id', bukuCtrl.remove)

module.exports = router