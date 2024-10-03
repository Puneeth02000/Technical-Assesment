import React ,{useEffect} from "react";
import StreamList from "./stream.jsx";
import Sidebar from "./sidebar.jsx";
//import Chat from './chat.jsx';
import Profile from "./profile2.jsx";
import { Link } from "react-router-dom";
import Main from "./serachbar.js";
import FetchData from "./api.jsx";
import "./index.css";
import UserSelector from "./select.jsx";

import SelectUser from "./searchbar2.jsx";

const Home = () => {
  const streams = [
    { id: 1, title: "Stream 1", thumbnail: "thumbnail1.jpg" },
    { id: 2, title: "Stream 2", thumbnail: "thumbnail2.jpg" },
  ];
  useEffect(() => {
   
    alert('Welcome');
  }, []);
  return (
    <div>
      <Sidebar />
      <Main />
      <Link to="/profile">
        <p style={{ textDecoration: "none", color: "Black" }}>1.Profile page</p>
      </Link>
      <Link to="/stream">2.Streams</Link>
      <br></br>
      <Link to="/mobile">3.Mobile</Link>
      <br></br>
      <Link to="/user">4.Users List</Link>
      <br></br>
      <Link to="/select">5.Select user</Link>
      <br></br>
      <Link to="/game">6.play Game</Link>

      <StreamList streams={streams} />
    </div>
  );
};

export default Home;
