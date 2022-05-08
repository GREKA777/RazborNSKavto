const Router = require("express")
const router = new Router()
const autoPartController = require('../controllers/autoPartController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), autoPartController.create)
router.get('/',autoPartController.getAll)
router.get('/:id',autoPartController.getOne)

module.exports = router