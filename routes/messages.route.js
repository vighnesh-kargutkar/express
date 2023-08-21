 const express = require('express')
const messagescontroller =require('../controllers/messages.controller')
const messagerouter =express.Router();

messagerouter.get('/',messagescontroller.getmessages)

module.exports = messagerouter