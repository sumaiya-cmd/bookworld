import React from 'react'
import Register from './Register';
import  Login  from "./Login.js";
import { Route , Routes } from 'react-router-dom';
import Dashboard from "./dashboard/dashboard";
import AddPets from "./addpet.js";
import Update from "./Update.js";
import Petdetails from "./petdetails.js";

const App = () => {
  return (
    <div className=' '>
      
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/addpets/:loginuser' element={<AddPets/>} ></Route>
        <Route path='/dashboard' element={<Dashboard /> }></Route>
        <Route path='/Update/:id' element={<Update/>} />
        <Route path='/petdetails/:petid' element={<Petdetails /> }></Route>
      </Routes>

    </div>
  )
}

export default App