import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import StudentLogIn from './components/StudentLogIn';
import StudentRegister  from './components/StudentRegister';
import CompanyLogin from './components/CompanyLogIn';
import CompanyRegister from './components/CompanyRegister'
import AdminLogin from './components/AdminLogIn';
import AdminRegister from './components/AdminRegister';
import CompanyHome from './components/CompanyHome';
import StudentProfile from './components/StudentProfile';
import EditStudentProfile from './components/EditStudentProfile';
function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/StudentLogIn' element={<StudentLogIn/>}/>
        <Route path='/CompanyLogIn' element={<CompanyLogin/>}/>
        <Route path='/StudentRegister' element={<StudentRegister/>}/>
        <Route path='/CompanyRegister' element={<CompanyRegister/>}/>
        <Route path='/AdminLogIn' element={<AdminLogin/>}/>
        <Route path='/AdminRegister' element={<AdminRegister/>}/>
        <Route path='/CompanyHome' element={<CompanyHome/>}/>
        <Route path='/StudentProfile' element={<StudentProfile/>}/>
        <Route path='/EditStudentProfile' element={<EditStudentProfile/>}/>
      </Routes>
    </Router>
   </div>
  )    
  
}

export default App;
