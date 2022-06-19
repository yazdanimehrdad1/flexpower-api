const factoryController = require('../controllers/factory.controller')

module.exports = (app)=>{
    app.get('/api/factory/index', factoryController.index),
    app.get('/api/factory', factoryController.getAllFactories),
    app.get('/api/factory/:id', factoryController.getOneFactory),
    app.post('/api/factory', factoryController.createFactory)
}