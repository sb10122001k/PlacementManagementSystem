const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  skills: [
    {
      type: String
    }
  ],
  dateOfBirth: {
    type: String
  },
  currentSemester: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  contactNumber: {
    type: String
  },
  address: {
    type: String
  },
  careerObjective: {
    type: String
  },
  degreeCollege: {
    type: String
  },
  branch: {
    type: String
  },
  specialization: {
    type: String
  },
  collegeAddress: {
    type: String
  },
  score: {
    type: String
  },
  courseDuration: {
    type: String
  },
  keySkills: [
    {
      type: String
    }
  ],
  careerPreferences: [
    {
      type: String
    }
  ],
  image: {
    type: String
  }
});



const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  companyLogo: {
    type: String
  },
  companyDescription: {
    type: String
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
});



const JobPostingSchema = new mongoose.Schema({
  companyEmail: {
    type: String,
    required: true,
    ref : 'Company'
  },
  jobRole: {
    type: String,
    required: true
  },
  JobDescription : {
    type: String,
    required: true
  },
  Package: {
    type: String,
    required: true
  },
  Qualification: {
    type: String,
    required: true
  },
  Eligibility: {
    type: String,
    required: true
  },
  Specialization: {
    type: String,
    required: true
  },
  Experience: {
    type: String,
    required: true
  },
  
  JobLocation: {
    type: String,
    required: true
  },
  LastDate: {
    type: Date,
    required: true
  },
  DriveFrom: {
    type: Date,
    required: true
  },
  DriveTO: {
    type: Date,
    required: true
  },
  Venue: {
    type: String,
    required: true
  },
  Name:{
    type:String,
    required:true
  },
  

});

const AppliedCandidateSchema = new mongoose.Schema({ 
  usn:{
    type:String,
    required:true,
    ref: 'Student'
  },
  jobid:{
    type:String,
    required:true,
    ref: 'Company'
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'accepted'],
    default: 'pending'
  }

})


const InterviewSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    ref: 'Student'
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed'],
    default: 'scheduled'
  }
});


const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Export the models
module.exports = {
  Student: mongoose.model('student', StudentSchema),
  Company: mongoose.model('company', CompanySchema),
  Posting: mongoose.model('posting', JobPostingSchema),
  AppliedCandidate: mongoose.model('appliedCandidateSchema',AppliedCandidateSchema),
  Interview: mongoose.model('interview',InterviewSchema),
  Admin: mongoose.model('admin',AdminSchema)
};
