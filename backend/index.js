const express = require('express')
const cors = require('cors')
const multer = require('multer');
const app = express()
const dotenv = require('dotenv')
const { Student, Company, Placement, Posting, AppliedCandidateSchema,Resume } = require('./models')
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
const upload = multer();

app.get('/api/studentProfile', async (req, res) => {

  const data = studentProfileModel.getData()
  res.json(data)

})


app.get('/api/getResume/:usn', async (req, res) => {
  console.log(req.baseUrl)
  const { usn } = req.params;
 

  try {
    const usnPdf = await Resume.findOne({ usn:req.params.usn });

    if (!usnPdf || !usnPdf.resume.data) {

      console.log(usnPdf)
      console.log(usnPdf.pdf.data)
      return res.status(404).send('File not found');
    }

    const { data, contentType } = usnPdf.resume;

   
    res.set('Content-Type', contentType);

    // Send the file data as the response
    res.send(data);
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).send('An error occurred while fetching the file');
  }
});

app.post('/api/Resumeupload', upload.single('pdf'), async (req, res) => {
  console.log("hi")
  try {
    console.log(req.body)
    const { usn } = req.body;
    const pdfData = req.file.buffer;
    const contentType = req.file.mimetype;

    const resume = new Resume({
      usn,
      resume: {
        data: pdfData,
        contentType
      }
    });
    await resume.save();

    res.status(201).json({ message: 'USN and PDF stored successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while storing USN and PDF' });
  }
});

app.put('/api/updateApplicationStatus/:id', async (req, res) => {
  const id = req.params.id;
  const { status}  = req.body;
 
  console.log(status)
  try {
    // Find the job posting by ID and update the status
    const updatedJobPosting = await AppliedCandidateSchema.findByIdAndUpdate(
      id,
      {$set: { status }},
      { new: true }
    );

    res.status(200).json(updatedJobPosting);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the job posting.' });
  }
});


app.post('/api/newJobApplied', async (req, res) => {
  console.log(req.body)
  const newPosting = await AppliedCandidateSchema.create(req.body)
  const posting = await newPosting.save()
  res.status(200).json({ status: "ok" })
})

app.get('/api/getCandidateList/:id', async (req, res) => {
  const jobId = req.params.id;
  try {
    const list = await AppliedCandidateSchema.find({ jobid: jobId })
    res.status(200).json(list);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve job postings.' });
  }
})

app.get('/api/getJobPosted/:id', async (req, res) => {
  const companyemail = req.params.id;
  try {
    const jobPostings = await Posting.find({ email: companyemail });
    // console.log(jobPostings)
    res.status(200).json(jobPostings);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve job postings.' });
  }
})

app.get('/api/getposting', async (req, res) => {
  console.log(req)
  Posting.find()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    })
})

app.post('/api/studentRegister', async (req, res) => {

  try {
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
  } catch (err) {
    console.log(err);
  }
})

app.post('/api/studentLogin', async (req, res) => {

  try {
    const student = await Student.findOne({ usn: req.body.usn })
    // !student && res.status(404).json("student not found")
    res.status(404).json({ status: 'ok', user: req.body.usn })
    const validPassword = await bcrypt.compare(req.body.password, student.password)
    !validPassword && res.status(400).json("invalid password")



    res.status(200).json(student)
  } catch (err) {
    console.log(err);
  }
  // res.status(206).send("ok")
})

app.put('/api/studentUpdate', async (req, res) => {
  const { usn, skills, class10, class12, dateOfBirth } = req.body;

  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { usn },
      {
        skills, dateOfBirth,
        class10: class10,
        class12: class12
      },
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

app.get('/api/StudentProfile/:id', async (req, res) => {
  const { usn } = req.params.id;
  const student = await Student.findOne(usn);
  res.send(student)
})

app.post('/api/registerCompany', async (req, res) => {

  console.log(req.body);
  try {
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
  } catch (err) {
    console.log(err);
  }

  // res.status(206).send("ok")
})
app.post('/api/companyLogin', async (req, res) => {
  console.log(req.body)
  try {
    const company = await Company.findOne({ email: req.body.email })
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

    res.status(200).json({ status: 'ok', user: req.body.email, name: company.name, id: company._id })
  } catch (err) {
    console.log(err);
  }
})

app.post('/api/newJobPosting', async (req, res) => {
  console.log(req.body)
  const newPosting = await Posting.create(req.body)
  const posting = await newPosting.save()
  res.status(200).json(posting)


})

app.put('/api/companyUpdate', async (req, res) => {
  const { name, email, password, address, website, contact } = req.body;
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  try {
    const updatedCompany = await Company.findOneAndUpdate(
      { email },
      { name, hashedPassword, address, website, contact },
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
app.post('/api/registerAdmin', (req, res) => {
  console.log(req.body)
})
app.post('/api/adminLogin', (req, res) => {
  console.log(req.body)
})

app.listen(1337, () => {
  console.log('Server Started')
})