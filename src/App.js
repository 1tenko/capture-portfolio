import React from "react";
// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
// Styles
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
