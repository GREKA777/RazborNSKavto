const uuid = require('uuid')
const path = require('path');
const {Tiers} = require('../models/models')
const ApiError = require('../error/ApiError')

class TiersController {
    async create(req, res, next) {
        try {
            const {name, num, width, profile, diameter, count, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const tiers = await Tiers.create({name, num, width, profile, diameter, count, price, img: fileName})
            return res.json(tiers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {profile, diameter, width, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let tierss;
        if (!profile && !diameter && !width) {
            tierss = await Tiers.findAndCountAll({limit, offset})
        }
        if (profile && !diameter && !width) {
            tierss = await Tiers.findAndCountAll({where: {profile}, limit, offset})
        }
        if (!profile && diameter && !width) {
            tierss = await Tiers.findAndCountAll({where: {diameter}, limit, offset})
        }
        if (!profile && !diameter && width) {
            tierss = await Tiers.findAndCountAll({where: {width}, limit, offset})
        }
        if (profile && diameter && width) {
            tierss = await Tiers.findAndCountAll({where: {diameter, profile, width}, limit, offset})
        }
        if (profile && diameter && !width) {
            tierss = await Tiers.findAndCountAll({where: {diameter, profile}, limit, offset})
        }
        if (!profile && diameter && width) {
            tierss = await Tiers.findAndCountAll({where: {diameter, width}, limit, offset})
        }
        if (profile && !diameter && width) {
            tierss = await Tiers.findAndCountAll({where: {width, profile}, limit, offset})
        }
        return res.json(tierss)
    }

    async getOne(req, res) {
        const {id} = req.params
        const tiers = await Tiers.findOne(
            {
                where: {id}
            },
        )
        return res.json(tiers)
    }
}

module.exports = new TiersController()