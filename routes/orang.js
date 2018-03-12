const router = require('express').Router()

const orangCtrl = require('../controllers/orangCtrl')

router.get('/', orangCtrl.getAll)
router.get('/:id/pinjam', orangCtrl.getListPinjam)
router.get('/:id', orangCtrl.getOne)
router.post('/', orangCtrl.create)
router.put('/:id', orangCtrl.update)
router.delete('/:id', orangCtrl.remove)

module.exports = router