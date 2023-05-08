const express=require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())
app.use(express.json())

app.post('/api/studentLogin',(req,res)=>{
    console.log(req.body)
    // res.status(206).send("ok")
})
app.post('/api/registerCompany',(req,res)=>{
    console.log(req.body)
    // res.status(206).send("ok")
})
app.post('/api/companyLogin',(req,res)=>{
    console.log(req.body)
})
app.post('/api/registerAdmin',(req,res)=>{
    console.log(req.body)
})
app.post('/api/adminLogin',(req,res)=>{
    console.log(req.body)
})

app.listen(1337,()=>{
    console.log('Server Started')
})