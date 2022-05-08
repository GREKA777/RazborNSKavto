const {History} = require('../models/models')
const ApiError = require("../error/ApiError")

class HistoryController{
    async create(req, res){
        const {userId} = req.body
        const history = await History.create({userId})
        return res.json(history)
    }
    async getAll(req, res){
        const historys = await History.findAll()
        return res.json(historys)
    }
}

module.exports = new HistoryController()