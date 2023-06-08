const express = require ('express')
const router = express.Router()
const adminRouter = require ('./admin')
const userRouter = require ('./user')
const Controller = require ('../controllers/controller')

router.get ('/', Controller.home)
router.use (adminRouter)
router.use (userRouter)

module.exports = router