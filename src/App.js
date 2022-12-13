
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Users from './components/Users';
import Search from './components/Search';
import UserDetail from './components/UserDetail';
 import { BrowserRouter as Router,Route,Link,Switch,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';



 function App(){
  const [users,setUsers]=useState([])
  const [showClear,setshowClear]=useState(false)
//  axios.get("https://api.github.com/users").then((res)=>{
 
//   setUsers(res.data)
//  })
  const searchName=async(name)=>{
    const res=await axios.get(`https://api.github.com/search/users?q=${name}`)
      setUsers(res.data.items)
      setshowClear(!showClear)
    }

    const clearUsers=()=>{
      setUsers([])
    }

  return (
        <Router>
            <Navbar/>
           
            <div className='container'>
            <Search searchName={<searchName/>} showClear={showClear} clearUsers={clearUsers} />
            < Users users={users}/>
       
            <Routes>
           <Route exact path="/about" element={<About/>}/>
              {/* <Route exact path="/user/:anything" element={<UserDetail/>}/> */}
              </Routes>
              {/* </switch> */}
              </div> 
        </Router>

  )
}

export default App;
