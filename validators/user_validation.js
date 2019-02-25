const { check } = require('express-validator/check');
const User = require('../models').User;

exports.store = [
    check('email')
        .isEmail().withMessage('Email must be a valid email')
        .custom(async value => {
            let user = await User.findOne({
                where: {
                    email: value
                }
            })
            
            return user === null ? true : false
        }).withMessage('Email already in use')
]