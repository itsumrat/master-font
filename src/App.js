import React from "react";
import './App.css';
import HomePage from "./pages/home";
import HeaderComponent from "./components/header/HeaderComponent";
import SliderComponent from "./components/header/SliderComponent";

function App() {
  return (
      <div>
          <HeaderComponent/>
          <SliderComponent/>
          <HomePage/>
      </div>
  );
}

export default App;
