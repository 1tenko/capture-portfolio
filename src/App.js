import React from "react";
// Import Pages
import AboutUs from "./pages/AboutUs";
// Styles
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
