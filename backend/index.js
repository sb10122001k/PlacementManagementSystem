const express=require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const {Student, Company, Placement, Posting} = require('./models')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const studentProfileModel = require('./studentprofile')
dotenv.config()
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection open");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 
app.use(cors())
app.use(express.json())

app.get('/api/studentProfile',async (req,res)=>{

  const data=studentProfileModel.getData()
  res.json(data)

})

app.post('/api/studentRegister', async (req, res)=>{

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const newStudent = await Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            usn: req.body.usn,
            email: req.body.email,
            password: hashedPassword,
            class10: req.body.class10,
            class12: req.body.class12
    
        })

        const student = await newStudent.save()
        res.status(200).json(student) 
    } catch(err){
        console.log(err);
    }
})
app.json("hi")
app.post('/api/studentLogin',async (req,res)=>{
   
    try{
        const student = await Student.findOne({usn: req.body.usn})
        // !student && res.status(404).json("student not found")
        res.status(404).json({ status: 'ok' ,user:req.body.usn})
        const validPassword = await bcrypt.compare(req.body.password, student.password)
        !validPassword && res.status(400).json("invalid password")

        

        res.status(200).json(student)
    } catch(err){
        console.log(err);
    }
    // res.status(206).send("ok")
})

app.put('/api/studentUpdate', async (req, res) => {
    const { usn, skills, class10, class12, dateOfBirth} = req.body;
  
    try {
      const updatedStudent = await Student.findOneAndUpdate(
        { usn },
        { skills , dateOfBirth,
        class10: class10,
        class12: class12},
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
     
      await updatedStudent.save();
  
      res.json(updatedStudent);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.get('/api/student/:id', async(req, res)=>{
  const {usn} = req.params.id;
  const student = await Student.findOne(usn);
  res.send(student)
})

app.post('/api/registerCompany',async (req,res)=>{
    
    console.log(req.body);
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const newCompany = await Company.create({
            
                name: req.body.companyName,
                email: req.body.email,
                password: hashedPassword,
                address: req.body.address,
                website: req.body.companyWebsite,
                contact: {
                  email: req.body.email,
                  phone: req.body.contactNumber
                  
                }
              

        })

        const company = await newCompany.save()


        res.status(200).json(company) 
    } catch(err){
        console.log(err);
    }

    // res.status(206).send("ok")
})
app.post('/api/companyLogin',async (req,res)=>{
    console.log(req.body)
    try{
        const company = await Company.findOne({email: req.body.email})
        // !company && res.status(404).json("Company not found")
        !company && res.status(404).json({ status: 'Company not found' })

        const validPassword = await bcrypt.compare(req.body.password, company.password)
        !validPassword && res.status(400).json("invalid password")

        res.status(200).json({ status: 'ok' ,user:req.body.email})
    } catch(err){
        console.log(err);
    }
})

app.post('/api/newJobPosting',async(req,res)=>{
  console.log(req.body)
  const newPosting = await Posting.create(req.body)
  const posting = await newPosting.save()
  res.status(200).json(posting) 


})

console.log("HELOO");

app.put('/api/companyUpdate', async (req, res) => {
    const {name, email, password, address, website, contact} = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
      const updatedCompany = await Company.findOneAndUpdate(
        { email },
        {name, hashedPassword, address, website, contact},
        { new: true }
      );
  
      if (!updatedCompany) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      
      await updatedCompany.save();
  
      res.json(updatedCompany);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
app.post('/api/registerAdmin',(req,res)=>{
    console.log(req.body)
})
app.post('/api/adminLogin',(req,res)=>{
    console.log(req.body)
})

app.listen(1337,()=>{
    console.log('Server Started')
})