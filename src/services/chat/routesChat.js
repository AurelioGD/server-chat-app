const { Router } = require('express')

const routerChat = Router()

routerChat.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

module.exports=routerChat;