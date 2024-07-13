import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./BookingAPI";
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
    // const [availableTimes, dispatch] = ['5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm'];

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="">
                <BookingForm
                    {...{
                        submitForm,
                        availableTimes,
                        dispatch,
                    }}
                />
            </div>
            <small className="rights">© All rights reserved to Little Lemon</small>
        </>
    )
};

export { updateTimes, initializeTimes, useSubmitForm };
export default BookingPage;