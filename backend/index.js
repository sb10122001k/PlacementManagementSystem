const express=require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const {Student, Company, Interview, Posting, AppliedCandidate, Admin} = require('./models')
const email = require('./emailservice')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const studentProfileModel = require('./studentprofile')
const jwt = require('jsonwebtoken')
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

app.post('/api/newJobApplied',async(req,res)=>{
  console.log(req.body)
  const newPosting = await AppliedCandidateSchema.create(req.body)
  const posting = await newPosting.save()
  res.status(200).json({status:"ok"})
})

app.get('/api/getposting', async (req, res)=> {
  console.log(req)
    Posting.find()
    .then((result) => {
      res.send(result);
  }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
  })
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

app.put('/api/students/:usn', async (req, res) => {
  const usn = req.params.usn;
  const updateData = req.body;

  try {
    // Find the student by USN
    const student = await Student.findOne({ usn });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update individual elements of the student data
    Object.assign(student, updateData);

    // Save the updated student data
    const updatedStudent = await student.save();

    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update student data' });
  }
});

app.get('/api/StudentProfile/:id', async(req, res)=>{
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

        const token = jwt.sign(
          {
              name: company.name,
              email: req.body.email,
          },
          'secret123'
      )

        res.status(200).json({ status: 'ok' ,user:req.body.email,name:company.name,id:company._id})
    } catch(err){
        console.log(err);
    }
})

//new job posting
app.post('/api/newJobPosting',async(req,res)=>{
  console.log(req.body)
  try {
    
    const newJobPosting = new Posting(req.body);
    const studentEmails = await Student.find().distinct('email');
    
    // Save the job posting to the database
    const savedJobPosting = await newJobPosting.save();
    const subject = 'New Job Posting Notification';
    const message = 'A new job has been posted. Check the job board for more details.';

    for (const email of studentEmails) {
      await sendEmailToStudent(email, subject, message);
    }
    res.status(201).json(savedJobPosting); 
    
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  } 
});

//delete a job
app.delete('/api/jobPostings/:id', async (req, res) => {
  try {
    const jobId = req.params.id; 
    
    
    const jobPosting = await Posting.findOne(jobId);
    
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    
    // Delete the job posting document
    await jobPosting.remove();
    
    res.json({ message: 'Job posting deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//update the job
app.put('/api/jobPostings/:id', async (req, res) => {
  try {
    const jobId = req.params.id; 
    
   
    const jobPosting = await Posting.findOne(jobId);
    
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    
    
    jobPosting.jobRole = req.body.jobRole;
    jobPosting.JobDescription = req.body.JobDescription;
    jobPosting.Package = req.body.Package;
    jobPosting.Qualification = req.body.Qualification;
    jobPosting.Eligibility = req.body.Eligibility;
    jobPosting.Specialization = req.body.Specialization;
    jobPosting.Experiance = req.body.Experiance;
    jobPosting.JobLocation = req.body.JobLocation;
    jobPosting.LastDate = req.body.LastDate;
    jobPosting.DriveFrom = req.body.DriveFrom;
    jobPosting.DriveTO = req.body.DriveTO;
    jobPosting.Venue = req.body.Venue;
    
   
    const updatedJobPosting = await jobPosting.save();
    
    res.json(updatedJobPosting);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
  
});

//status of candidates
app.get('/status/:jobId/:usn', async (req, res) => {
  const jobId = req.params.jobId;
  const usn = req.params.usn;

  try {
    // Find the job posting
    const jobPosting = await Posting.findOne(jobId);

    if (!jobPosting) {
      return res.status(404).json({ error: 'Job posting not found' });
    }

    // Find the applied candidate for the job posting and USN
    const appliedCandidate = await AppliedCandidate.findOne({
      jobid: jobId,
      usn: usn
    });

    if (!appliedCandidate) {
      return res.status(404).json({ error: 'Candidate not found for the job' });
    }

    res.json(appliedCandidate.status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve candidate status' });
  }
});

//track job applications
app.get('/applications/:jobId', async (req, res) => {
  const jobId = req.params.jobId;

  try {
    // Find the job posting
    const jobPosting = await Posting.findOne({ companyEmail: jobId });

    if (!jobPosting) {
      return res.status(404).json({ error: 'Job posting not found' });
    }

    // Find all the applied candidates for the job posting
    const appliedCandidates = await AppliedCandidate.find({ jobid: jobPosting.companyEmail });

    res.json(appliedCandidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve job applications' });
  }
});

// Schedule an interview
app.post('/interviews', async (req, res) => {
  try {
    const { usn, date, time, location } = req.body;

    // Create a new interview
    const interview = new Interview({
      usn,
      date,
      time,
      location
    });

    // Save the interview
    await interview.save();
    const student = await Student.findOne({ usn: req.body.usn });
    const studentEmail = student.email;
    const subject = 'Interview Scheduled';
    const message = 'An interview has been scheduled. Check your interview details for more information.';

    await sendEmailToStudent(studentEmail, subject, message);
    res.json(interview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to schedule interview' });
  }
});

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
// Register a new admin
app.post('/aapi/registerAdmin', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingAdmin = await Admin.findOne().or([{ username }, { email }]);

    if (existingAdmin) {
      return res.status(409).json({ error: 'Admin already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const admin = new Admin({ username, password: hashedPassword, email });

    
    const savedAdmin = await admin.save();

    res.status(201).json(savedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register admin' });
  }
});

app.post('/api/adminLogin',async (req,res)=>{
    console.log(req.body)
    const { username, password } = req.body;

  try {
    
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

   
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to authenticate' });
  }
});

app.listen(1337,()=>{
    console.log('Server Started')
})