const FeedbackController = require('../controllers/feedback.controller')
const {authenticate} = require("../config/jwt.config")

const routes = (app)=>{

    app.post('/api/feedbacks', authenticate, FeedbackController.create)

    app.get('/api/feedbacks', FeedbackController.getAll)

    app.get('/api/feedbacks/:id', FeedbackController.getOne)

    app.put('/api/feedbacks/:id', FeedbackController.update)

    app.delete('/api/feedbacks/:id', FeedbackController.delete)

    app.get('/api/feedbacksbyuser/:username', authenticate, FeedbackController.findAllFeedbacksByUser)

}

module.exports = routes