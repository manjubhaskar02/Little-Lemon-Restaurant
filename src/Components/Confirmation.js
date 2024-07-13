import { Link, useLocation } from "react-router-dom";
import Display from "./Display";

function Confirmation() {
    const { state } = useLocation();
    const { date, firstName, lastName, email, phone, time, occasion, guests, reserveNumber } = state;


    function upperCase(word) {
        const original = [...word];
        return original[0].toUpperCase() + original.slice(1).join('');
    };


    return (
        <>
            <section className="confirmation">

                <div className="reserve">

                    <h2 className="center">Table reserved at the Chicago Branch!</h2>
                    <p className="">Your Reservation has been confirmed.</p>
                    <div className="details">
                        <ul>
                            <li>Reservation number:</li>
                            <li>Full Name:</li>
                            <li>Phone Number:</li>
                            <li>Reservation date:</li>
                            <li>Reservation time:</li>
                            <li>Number of People:</li>
                            <li>Occasion:</li>
                        </ul>
                        <ul>
                            <li><b>000-{reserveNumber}-123</b></li>
                            <li>{upperCase(firstName)} {upperCase(lastName)}</li>
                            <li>{phone}</li>
                            <li>{date}</li>
                            <li>{time}</li>
                            <li>{guests}</li>
                            <li>{occasion ? occasion : 'General'} </li>
                        </ul>
                    </div>
                    <p>Check Your Email: <b>{email}</b>  </p>
                    <br />
                    <div className="center">
                        <Link to="/booking" rel="href" aria-label="Go back to Booking page">Edit Booking</Link>
                    </div>
                </div>
            </section>
            <section className="display-section">
                <Display />

            </section>
        </>
    )
};
export default Confirmation;