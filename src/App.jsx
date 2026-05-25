import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import HeroSection from "./Component/Herosection";
import ProductSlider from "./Component/ProductSlider";
import FashionSection from "./Component/FashionSection";


const Home = () => {
  return (
    <>
      <Navbar /> 
        <HeroSection/>
        <ProductSlider/>
        <FashionSection/>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
