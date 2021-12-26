import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing';
import NavBar from './components/NavBar'
import AddUser from './pages/AddUser'
import Blog from './pages/Blog'
import UsersList from './pages/UsersList';

function App() {

    // set auth user
  useEffect(() => {
     const data=JSON.stringify({id:"1",firstName:"Mohamed",lastName:"Ben Arbia"})
      localStorage.setItem("user",data)
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
   <Routes>
     <Route path='/' element={<Landing />}  />
     <Route path='/addUser' element={<AddUser />}  />
     <Route path='/blog' element={<Blog />}  />
     <Route path='/usersList' element={<UsersList />}  />
   </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
