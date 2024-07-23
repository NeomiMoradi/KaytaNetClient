// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
// import Home from './components/Home';
import Workshops from './component/Vendors'
import CraftKits from './component/CraftKits'
import Camps from './component/camps/Camps'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import Entrance from './component/Entrance'
import HomePage from './component/HomePage'
import MyBasket from './component/MyBasket'
import Search from './component/Search'
import Login from './component/user/Login';
import SignIn from './component/user/SignIn';
//import {login} from './utils/user';
//import {addUser} from './utils/user';
import NewCamp from './component/camps/NewCamp';
import ManageCamp from './component/camps/ManageCamp';
import Schedule from './component/camps/Schedule';
import CampsList from './component/camps/CampList';
// import { format, addDays } from 'date-fns';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar /> {/* Include the navigation bar */}
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/CraftKits" element={<CraftKits />} />
          <Route path="/Workshops" element={<Workshops />} />
          <Route path="/Camps" element={<Camps />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Entrance" element={<Entrance />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/MyBasket" element={<MyBasket />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/newCamp" element={<NewCamp />} />
          <Route path="/ManageCamp" element={<ManageCamp />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/campsList" element={<CampsList />} />


          {/* <Route component={NotFound} /> */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
