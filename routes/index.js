const UserController =require('../controllers').UserController;

// Validators
const UserValidation = require('../validators/user_validation');

module.exports = (app) => {
    app.get('/api/users', UserController.all);
    app.get('/api/users/:id', UserController.show);
    app.post('/api/users', UserValidation.store, UserController.create);
    app.delete('/api/users/:id', UserController.delete);
}