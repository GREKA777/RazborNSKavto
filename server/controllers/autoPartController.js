const uuid = require('uuid')
const path = require('path');
const {AutoPart} = require('../models/models')
const ApiError = require('../error/ApiError')

class AutoPartController{
    async create(req, res, next){
        try {
            const {name, num, year, car, engine, run, description, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const autoPart = await AutoPart.create({name, num, year, car, engine, run, description, typeId, img: fileName})
            return res.json(autoPart)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {car, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let autoParts;
        if(!car && !typeId){
            autoParts = await AutoPart.findAndCountAll({limit, offset})
        }
        if(car && !typeId){
            autoParts = await AutoPart.findAndCountAll({where:{car}, limit, offset})
        }
        if(!car && typeId){
            autoParts = await AutoPart.findAndCountAll({where:{typeId}, limit, offset})
        }
        if(car && typeId){
            autoParts = await AutoPart.findAndCountAll({where:{typeId, car}, limit, offset})
        }
        return res.json(autoParts)
    }
    async getOne(req, res){
        const {id} = req.params
        const autoPart = await AutoPart.findOne(
            {
                where: {id}
            },
        )
        return res.json(autoPart)
    }
}

module.exports = new AutoPartController()