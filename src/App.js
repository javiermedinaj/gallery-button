import React from 'react';
import Swiper from './components/CustomSwiper';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Swiper />
      <About />
    </div>
  );
}

export default App;