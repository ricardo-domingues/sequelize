const User = require('../models').User;
const Person = require('../models').Person;
const Entities = require('../models').Entity;

const { validationResult } = require('express-validator/check');
const util = require('../utils/util')

module.exports = {

    /*
    * METHOD - GET
    * DESCRIPTION - RETURNS A LIST OF USER´S
    */
    all (req, res) {
        let page = 1
        let limit = 50
        let offset = limit * (page - 1)
        let ascending = req.query.asceding
        let orderBy = req.query.orderBy

        if (orderBy && orderBy !== '') {
            if (orderBy === 'entity') {
                orderBy = 'entity_id'
            }
        } else {
            orderBy = 'id'
        }

        let queryConditions = {}
        if (req.query.name && req.query.name !== '') queryConditions.name = req.query.name

        User.findAndCountAll({
            attributes: ['id', 'name', 'email'],
            where: queryConditions,
            limit: limit,
            offset: offset,
            order: [
                [orderBy, ascending === 1 ? 'ASC' : 'DESC']
            ]
        }).then((response) => {
            res.status(200).json({
                data: response.rows,
                meta: {
                    total: response.count
                }
            })
        }).catch((err) => { 
            res.status(500).json({message: err})
        })
    },

    /*
    * METHOD - POST
    * DESCRIPTION - CREATES AN USER MODEL
    */
    async create (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let permissions = await Entity

        let hashPassword = await util.hashPassword(req.body.password)

        req.body.password = hashPassword

        User.create(req.body).then(user => {
            res.status(201).json({data: user})
        })
        .catch((error) => {
            res.status(500).json({error: error})
        })
    },

    show (req, res) {
        User.findByPk(req.params.id, {include: [Person]}).then((user) => {
            res.status(200).json({data: user})
        }).catch((error) => {
            res.status(500).json({message: error})
        })
    },

    delete (req, res) {
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).json({data: 'User deleted successfully'})
        }).catch((error) => res.status(500).json({error: error}))
    }
}