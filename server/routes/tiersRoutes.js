const Router = require("express")
const router = new Router()
const tiersController = require('../controllers/tiersController')

router.post('/', tiersController.create)
router.get('/', tiersController.getAll)
router.get('/:id', tiersController.getOne)

module.exports = router