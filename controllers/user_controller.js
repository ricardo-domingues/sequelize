const User = require('../models').User;
const Person = require('../models').Person;

module.exports = {

    all (req, res) {
        User.findAll({include: [ Person ]}).then(users => {
            res.status(200).json({data: users})
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: error})
        })
    },

    create (req, res) {
        User.create(req.body).then(user => {
            res.status(200).json({data: user})
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