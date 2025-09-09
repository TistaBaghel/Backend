import express from 'express'

const app = express()

app.get("/sayHello", (req, res)=>{
    res.json("Hello User")
})

app.listen(8080, ()=> console.log("Server listening on port 8080"))