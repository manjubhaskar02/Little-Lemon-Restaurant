// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// // import Main from './Components/Main';
// import Footer from './Components/Footer';
// import BookingPage from './Components/BookingPage';
// import Herosection from './Components/Herosection';
// import Menus from './Components//Menu';
// import Testimonial from './Components//Testimonal';
// import About from './Components//About';
// import React, { useState } from 'react';




// function App() {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [guests, setGuests] = useState('');
//   const [occasion, setOccasion] = useState('');
//   const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   return (
//     <Router>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Herosection />} />
//           <Route path="/booking" element={<BookingPage />} />
//         </Routes>

//         <section id='menu'>
//           <Menus />
//         </section>
//         <Testimonial />
//         <section id='about'>
//           <About />
//         </section>
//       </main>


//       <Footer />
//     </Router>
//   );

// }

// export default App;
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import BookingPage from './Components/BookingPage';
import Confirmation from './Components/Confirmation';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

