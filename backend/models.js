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


const CompanyInterviewSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    ref: 'Student'
  },
  companyEmail:{
    type:String,
    require:true
  },
  meetingLink:String,
  date1:String,
  time1:String,
  date2:String,
  time2:String,
  date3:String,
  time3:String,
  date4:String,
  time4:String,
  date5:String,
  time5:String
});

const StudentInterview = new mongoose.Schema({
  usn:String,
  meetingLink:String,
  companyEmail:String,
  date:String,
  time:String

})



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

const ResumeSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true
  },
  resume: {
    data: Buffer,
    contentType: {
      type: String,
      required: true,
      default: 'application/pdf'
    }
}
});

const ResumeFeedbackSchema = new mongoose.Schema({
  resumeId: {
    type: String,
    required: true,
    ref: 'Resume'
  },
  feedback: {
    type: [
      {
        company: {
          type: String,
          required: true
        },
        feedback: {
          type: String
        }
      }
    ],
    default: []
  }
});


// Export the models
module.exports = {
  Student: mongoose.model('student', StudentSchema),
  Company: mongoose.model('company', CompanySchema),
  Posting: mongoose.model('posting', JobPostingSchema),
  Resume:mongoose.model('resume',ResumeSchema),
  ResumeFeedback : mongoose.model('resumefeedback', ResumeFeedbackSchema),
  AppliedCandidate: mongoose.model('appliedCandidateSchema',AppliedCandidateSchema),
  CompanyInterview:mongoose.model('cmpanyInterview',CompanyInterviewSchema),
  StudentInterview:mongoose.model('studentIntervew',StudentInterview),
  Admin:mongoose.model('admin',AdminSchema)
};
