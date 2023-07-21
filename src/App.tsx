import React from "react";
import "./App.css";
import { Home } from "./screens/Home";
import { AnOtherPage } from "./screens/AnOtherPage";
import { Routes, Route, NavLink } from "react-router-dom";
import { Contact } from "./screens/Contact";

function App() {
  return (
    <div className="container mt-10">
      <header className="mb-5" >
        <nav className="flex justify-end">
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/">Accueil</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/page2">page 2</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/contact">contact</NavLink><br></br>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<AnOtherPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
