const express = require('express')
const friendscontroller =require('../controllers/friends.controller')
const friendrouter =express.Router();

friendrouter.use((req,res,next)=>{
    console.log(req.ip);
    next()
})
friendrouter.get('/',friendscontroller.getfriends)
friendrouter.post("/",friendscontroller.postfriends)
friendrouter.get('/:friendid',friendscontroller.getonefried)

module.exports = friendrouter