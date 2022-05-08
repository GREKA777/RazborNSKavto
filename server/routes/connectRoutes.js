const Router = require("express")
const router = new Router()
const connectController = require('../controllers/connectController')

router.post('/',connectController.create)
router.get('/',connectController.getAll)

module.exports = router