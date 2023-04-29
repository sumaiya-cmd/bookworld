import React from 'react'
import Register from './Register';
import  Login  from "./Login.js";
import { Route , Routes } from 'react-router-dom';
import Dashboard from "./dashboard/dashboard";
import Addbooks from "./addbook.js";
import Update from "./Update.js";
import Bookdetails from "./bookdetails";

const App = () => {
  return (
    <div className=' '>
      
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/addbooks/:loginuser' element={<Addbooks/>} ></Route>
        <Route path='/dashboard' element={<Dashboard /> }></Route>
        <Route path='/Update/:id' element={<Update/>} />
        <Route path='/bookdetails/:bookid' element={<Bookdetails /> }></Route>
      </Routes>

    </div>
  )
}

export default App