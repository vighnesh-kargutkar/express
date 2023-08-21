const express = require('express')
const path =require('path')
const app = express()


const friendrouter = require("./routes/friends.route")
const messagerouter =require("./routes/messages.route")
const port = 3000

app.set('view engine','hbs')
app.set('views' ,path.join(__dirname,'views'))
app.use((req,res,next)=>{
    console.log(` ${req.method} ${req.url}`);
    next()
})
// app.use('/site',express.static(path.join(__dirname,'public'))) 
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:"King of hell",
//         zoro:"Roronoa zoro",
//     })
// })
app.use('/friends',friendrouter);
app.use('/messages',messagerouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))