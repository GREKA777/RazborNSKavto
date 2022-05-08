const Router = require("express")
const router = new Router()
const autoPartController = require('../controllers/autoPartController')

router.post('/',autoPartController.create)
router.get('/',autoPartController.getAll)
router.get('/:id',autoPartController.getOne)

module.exports = router