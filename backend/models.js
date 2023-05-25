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
    type: String,
   
  },
  class10: {
    schoolName: {
      type: String,
      required: true
    },
    board: String,
    marks: String,
    passingYear: Number
  },
  class12: {
    schoolName: {
      type: String,
      required: true
    },
    board: String,
    marks: String,
    passingYear: Number
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


const PlacementSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: true
  },
  position: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  deadline: {
    type: Date,
    required: true
  },
  appliedStudents: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'student'
    },
    date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['applied', 'shortlisted', 'rejected', 'offered'],
      default: 'applied'
    }
  }]
});

const JobPostingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    ref: 'company'
  },
  jobRole: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  jobLocation: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    required: true
  },
  driveFrom: {
    type: Date,
    required: true
  },
  driveTo: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true
  }
});

// Export the models
module.exports = {
  Student: mongoose.model('student', StudentSchema),
  Company: mongoose.model('company', CompanySchema),
  Placement: mongoose.model('placement', PlacementSchema),
  Posting: mongoose.model('posting', JobPostingSchema)
};
