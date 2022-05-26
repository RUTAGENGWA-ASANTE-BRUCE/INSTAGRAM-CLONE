import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Debug from './Debug';
import Header from './home/Header';
import Home from './home/Home';
import MessageBody from "./messages/MessageBody"
import OtherProfiles from './otherProfiles/OtherProfiles';
import Profile from './profile/Profile';

function App ()
{
  return (<>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/debug"} element={<Debug />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/messages"} element={<MessageBody />} />
        <Route path={"/explore"} element={<OtherProfiles />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </BrowserRouter>



  </>
  );
}

export default App;
