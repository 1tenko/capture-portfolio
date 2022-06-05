import React from "react";
// Import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
// Router
import { Routes, Route } from "react-router-dom";

// Styles
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/our-work" exact element={<OurWork />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
