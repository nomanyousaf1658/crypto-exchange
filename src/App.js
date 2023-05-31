import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Login from './components/Login';
import Header from './components/partial/Header';
import Footer from './components/partial/Footer';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  //Users Array
  const [users, addUser] = useState([]);
  const [loggedInUser, addLoggedInUser] = useState(null);

  return (
    <div className='container-fluid p-0 m-0'>
      <div className='app-container pt-10'>
        <Header loggedInUser={loggedInUser}/>
        <Routes>
          <Route>
            <Route path="login" element={<Login users={users} addLoggedInUser={addLoggedInUser} />} />
            <Route path="signup" element={<Signup users={users} addUser={addUser} />} />
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
