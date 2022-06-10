const Router = require("express")
const router = new Router()
const tiersController = require('../controllers/tiersController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), tiersController.create)
router.get('/', tiersController.getAll)
router.get('/:id', tiersController.getOne)
router.delete('/', checkRole("ADMIN"), tiersController.delete)

module.exports = router