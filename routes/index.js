const UserController =require('../controllers').UserController;

module.exports = (app) => {
    app.get('/api/users', UserController.all);
    app.get('/api/users/:id', UserController.show);
    app.post('/api/users', UserController.create);
    app.delete('/api/users/:id', UserController.delete);
}