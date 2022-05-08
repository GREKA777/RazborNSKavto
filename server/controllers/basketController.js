const {Basket} = require('../models/models')
const ApiError = require("../error/ApiError")

class BasketController{
    async create(req, res){
        const {userId} = req.body
        const basket = await Basket.create({userId})
        return res.json(basket)
    }
    async getAll(req, res){
        const baskets = await Basket.findAll()
        return res.json(baskets)
    }
}

module.exports = new BasketController()