const path = require('path')
function getmessages (req,res){
    // res.sendFile(path.join(__dirname,'..','public','images','zoro.jpg'))
    res.render('messages',{
        title:"message to my friend",
        friend:'viggy'
    })
}
module.exports = {getmessages}