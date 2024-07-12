import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage';
import Herosection from './Components/Herosection';
import Menus from './Components//Menu';
import Testimonial from './Components//Testimonal';
import About from './Components//About';



function App() {

  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        {/* <section id='home'>
          <Herosection />
        </section> */}
        <section id='menu'>
          <Menus />
        </section>
        <Testimonial />
        <section id='about'>
          <About />
        </section>
        {/* <BookingPage /> */}
      </main>


      <Footer />
    </Router>
  );

}

export default App;
