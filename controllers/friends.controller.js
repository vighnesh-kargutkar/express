const friend = require('../models/friends.model')

function getfriends(req,res){
    res.json(friend);
}

function getonefried(req,res){
    if(!req.params.friendid){
        return res.status(400).json({error:"Invlaid friend id"})
    }
    const fri= friend.find((element)=>element.id == +req.params.friendid)
    if(fri){
        res.render('friends',{
            title:'hello',
            friend:fri.name,
        })
        // res.json(fri);
    }else{
        return res.status(400).json({error:"friend not found"})
    }
}

function postfriends(req,res){
    if(!req.body.name){
        res.status(400).json({error:"Invlaid friend name"})
    }
    const newfriend ={
        id:friend.length,
        name: req.body.name,
    }
    friend.push(newfriend)
    res.json(newfriend)
}
module.exports={
    getfriends,
    getonefried,
    postfriends,
}