import React from "react";
//import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Stream from "./stream.jsx";
import ProfilePage from "./profile.jsx";
import StreamList from "./streamlist.js";
import Profile from "./profile2.jsx";
import Main from "./serachbar.js";
import FetchData from "./api.jsx";
import './index.css';
import UserList from "./api2.jsx";
import UserSelector from "./select.jsx";
import Game from './game/src/App';

const App = () => (
  <div className="main"> 
  
  <Routes style={{ background: "grey" }}>
    <Route path="/" element={<Home />}/>
    <Route  path="/profile" element={<ProfilePage />} />
    <Route path="/profile2" element={<Profile />} />
    <Route path="/stream" element={<Stream/>}/>
    <Route path="/mobile" element={<FetchData/>}/>
    <Route path="/user" element={<UserList/>}/>
   {/* <Route path="/select" element={<UserSelector/>}/> */}
   <Route path="/game" element={<Game />}/>
  </Routes>
  </div>
);

export default App;
