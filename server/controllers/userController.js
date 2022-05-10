const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket, Favourite, Orders, History} = require('../models/models')

const generateJwt = (id, FIO, email, role) => {
    return jwt.sign({id, FIO, email, role}, process.env.SECRET_KEY, {expiresIn: "24h"})
}

class UserController{
    async registration(req, res, next){
        const {FIO, email, password, role} = req.body
        if(!FIO || !email || !password){
            return next(ApiError.badRequest("Некорректные данные"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate){
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({FIO, email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const favourite = await Favourite.create({userId: user.id})
        const orders = await Orders.create({userId: user.id})
        const history = await History.create({userId: user.id})
        const token = generateJwt(user.id, user.FIO, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJwt(user.id, user.FIO, user.email, user.role)
        return res.json({token})
    }
    async check(req, res){
        const token = generateJwt(req.user.id, req.user.FIO, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()