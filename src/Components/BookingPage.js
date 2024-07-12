// import BookingForm from "./BookingForm";
// function BookingPage() {
//     return (
//         <div>
//             <h1>Booking Page</h1>
//             <BookingForm />
//         </div>
//     )
// }
// export default BookingPage
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./BookingAPI";
// import '../../assets/shared.css';
// import './book.css';
import useSubmitForm from "./SubmitForm";
import { useEffect } from "react";

function initializeTimes() {
    let today = new Date();
    return fetchAPI(today);
};

const updateTimes = (availableTimes, action) => {
    switch (action.type) {
        case 'date':
            return fetchAPI(action.payload);
        default:
            return;
    };
};

function BookingPage() {
    const { submitForm } = useSubmitForm();
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="reserve">
                <BookingForm
                    {...{
                        submitForm,
                        availableTimes,
                        dispatch,
                    }}
                />
                {/* <img className="map" src={require('../../assets/images/map.JPG')} alt="Little Lemon location" /> */}
            </div>
            <small className="rights">© All rights reserved to Little Lemon</small>
        </>
    )
};

export { updateTimes, initializeTimes, useSubmitForm };
export default BookingPage;