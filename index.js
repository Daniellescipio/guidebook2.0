require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.EXPRESS_PORT
const client = require('./db/client')


app.use(cors())
app.use(require('morgan')('dev'))
app.use(express.json())
app.use("/guide", require('./api/index'))
app.get("/", (req, res)=>{
    res.send("Hello")
})
const init = async ()=>{
    app.listen(process.env.EXPRESS_PORT, ()=>{
        client.connect(function(err) {
            if(err) throw err;
            console.log("connected to database");
        })
        console.log("The server is running. on port" ,port)
    })
} 
init()  
