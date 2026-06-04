const express = require ('express')
const app = express()
 
app.use(express.urlencoded({ extended: true}))

const data = []
 
app.post("/submit",(req,res) => {
    if(!req.body["email"]) res.end("data is empty")
    data.push(req.body)
    console.log(req.body)
    res.send("data is push")
})

app.get("/data",(req,res) => {
    res.json(data)
})

setTimeout(() => {
    console.log("timeout")
},2000)
app.listen(8000,() => console.log("Port is running."))