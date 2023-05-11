const mongoose = require('mongoose');

//student schema
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
  skills: [
    {
      type: String
    }
  ],
  dateOfBirth: {
    type: String,
    default: Date.now
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
//company schema
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

// Export the models
module.exports = {
  Student: mongoose.model('student', StudentSchema),
  Company: mongoose.model('company', CompanySchema),
  Placement: mongoose.model('placement', PlacementSchema)
};
