const sprocketController = require('../controllers/sprocket.controller')


module.exports = (app)=>{
    app.get('/api/index', sprocketController.index),
    app.get('/api/sprocket', sprocketController.getAllSprocket),
    app.get('/api/sprocket/:id', sprocketController.getOneSprocket),
    app.post('/api/sprocket', sprocketController.createSprocket),
    app.delete('/api/sprocket/:id', sprocketController.deleteSprocket),
    app.put('/api/sprocket/:id', sprocketController.updateSprocket)
}