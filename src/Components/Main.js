import Herosection from './Herosection';
import Menu from './Menu';
import Testimonal from './Testimonal';
import About from './About';
import React from 'react';
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


function Main() {


    // const [state, dispatch] = useReducer(reducer, initialState);
    // const { date, time, guests, occasion } = state;


    // const handleDateChange = (e) => {
    //     dispatch({ type: 'SET_DATE', payload: e.target.value });
    // };

    return (
        <main>
            <Herosection />
            <section id='menu'>
                <Menu />
            </section>
            <Testimonal />
            <section id='about'>
                <About />
            </section>


            {/* <BookingForm

                date={date} setDate={handleDateChange}
                time={time} setTime={(e) => dispatch({ type: 'SET_TIME', payload: e.target.value })}
                guests={guests} setGuests={(e) => dispatch({ type: 'SET_GUESTS', payload: e.target.value })}
                occasion={occasion} setOccasion={(e) => dispatch({ type: 'SET_OCCASION', payload: e.target.value })}
                availableTimes={availableTimes}
            /> */}
        </main>
    );
}

export default Main;


