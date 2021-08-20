const { Router } = require('express')
const gathererRouter = Router()

//importing services routes
const routesChat = require('../services/chat/routesChat')

gathererRouter.use('/chat',routesChat)

module.exports=gathererRouter;