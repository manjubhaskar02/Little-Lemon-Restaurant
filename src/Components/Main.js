// import Herosection from './Herosection'
// import Menus from './Menu';
// import Testimonial from './Testimonal';
// import About from './About';
// // import BookingForm from './BookingForm';
// import React, { useState } from 'react';
// import BookingPage from './BookingPage';


// function Main() {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [guests, setGuests] = useState(1);
//     const [occasion, setOccasion] = useState('');
//     const [availableTimes, setAvailableTimes] = useState([
//         '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
//     ]);
//     return (
//         <>

//             <main>
//                 <section id='home'>
//                     <Herosection />
//                 </section>
//                 <section id='menu'>
//                     <Menus />
//                 </section>
//                 <Testimonial />
//                 <section id='about'>
//                     <About />
//                 </section>
//                 <section id='booking' >
//                     <BookingPage
//                         date={date}
//                         setDate={setDate}
//                         time={time}
//                         setTime={setTime}
//                         guests={guests}
//                         setGuests={setGuests}
//                         occasion={occasion}
//                         setOccasion={setOccasion}
//                         availableTimes={availableTimes}

//                     />
//                 </section>
//             </main>
//         </>
//     );
// }

// export default Main;
// import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import Header from './Header';
import Footer from './Footer';
import Herosection from './Herosection';
import Menus from './Menu';
import Testimonal from './Testimonal';
import About from './About';
import React, { useState, useReducer } from 'react';
const initialState = {
    date: '',
    time: '',
    guests: '',
    occasion: '',
};
function reducer(state, action) {
    switch (action.type) {
        case 'SET_DATE':
            return { ...state, date: action.payload };
        case 'SET_TIME':
            return { ...state, time: action.payload };
        case 'SET_GUESTS':
            return { ...state, guests: action.payload };
        case 'SET_OCCASION':
            return { ...state, occasion: action.payload };
        default:
            return state;
    }
}


const Main = () => {
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [guests, setGuests] = useState('');
    // const [occasion, setOccasion] = useState('');
    // const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const [state, dispatch] = useReducer(reducer, initialState);
    const { date, time, guests, occasion } = state;

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const handleDateChange = (e) => {
        dispatch({ type: 'SET_DATE', payload: e.target.value });
    };

    return (
        <div>
            <Herosection />
            <section id='menu'>
                <Menus />
            </section>
            <Testimonal />
            <section id='about'>
                <About />
            </section>


            <BookingForm
                // date={date} setDate={setDate}
                // time={time} setTime={setTime}
                // guests={guests} setGuests={setGuests}
                // occasion={occasion} setOccasion={setOccasion}
                // availableTimes={availableTimes}
                date={date} setDate={handleDateChange}
                time={time} setTime={(e) => dispatch({ type: 'SET_TIME', payload: e.target.value })}
                guests={guests} setGuests={(e) => dispatch({ type: 'SET_GUESTS', payload: e.target.value })}
                occasion={occasion} setOccasion={(e) => dispatch({ type: 'SET_OCCASION', payload: e.target.value })}
                availableTimes={availableTimes}
            />
        </div>
    );
}

export default Main;


