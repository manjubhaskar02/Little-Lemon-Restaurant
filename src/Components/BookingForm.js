import { useState, useEffect } from "react";
import { validateEmail, validatePhone } from "./Fieldsvalidation";
import Display from "./Display";

function BookingForm({ dispatch, availableTimes, submitForm }) {
    const [firstName, setFirstName] = useState({ val: '', error: false });
    const [lastName, setLastName] = useState({ val: '', error: false });
    const [email, setEmail] = useState({ val: '', error: false });
    const [phone, setPhone] = useState({ val: '', error: false });
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // full date to match input type date.
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [guests, setGuests] = useState('2');

    const disableBtn = phone.error || email.error || firstName.error || lastName.error;

    function handleDateReducer() {
        dispatch({
            type: 'date',
            payload: new Date(date),
        })
    };

    function handleEmailBlur() {
        if (validateEmail(email.val)) {
            setEmail({ ...email, error: false })
        } else {
            setEmail({ ...email, error: true })
        }
    };

    function handlePhoneBlur() {
        if (validatePhone(phone.val)) {
            setPhone({ ...phone, error: false })
        } else {
            setPhone({ ...phone, error: true })
        }
    };

    function handleFirstNameBlur() {
        const textRegex = /[a-zA-Z]{3,15}$/;
        if (textRegex.test(firstName.val)) {
            setFirstName({ ...firstName, error: false })
        } else {
            setFirstName({ ...firstName, error: true })
        }
    };

    function handleLastNameBlur() {
        const textRegex = /[a-zA-Z]{3,15}/;
        if (textRegex.test(lastName.val)) {
            setLastName({ ...lastName, error: false })
        } else {
            setLastName({ ...lastName, error: true })
        }
    };

    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            setFirstName({ val: savedFormData.firstName, error: false });
            setLastName({ val: savedFormData.lastName, error: false });
            setEmail({ val: savedFormData.email, error: false });
            setPhone({ val: savedFormData.phone, error: false });
            setDate(savedFormData.date);
            setTime(savedFormData.time);
            setOccasion(savedFormData.occasion);
            setGuests(savedFormData.guests);
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            firstName: firstName.val,
            lastName: lastName.val,
            email: email.val,
            phone: phone.val,
            date: date,
            time: time,
            occasion: occasion,
            guests: guests,
            reserveNumber: Math.floor(Math.random() * 1000),
        };


        localStorage.setItem('formData', JSON.stringify(formData));
        submitForm(e, { formData });
    }

    return (
        <>
            <section className="booking-section">
                <div className="form-section">

                    <h2>Reservations </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-input">
                            <div className="input-group">
                                <label> Date:</label>
                                <input
                                    placeholder="Date"

                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={e => {
                                        setDate(e.target.value);
                                        handleDateReducer();
                                    }}
                                    min="2024-07-13" max="2024-08-30"
                                    required />
                            </div>
                            <div className="input-group">
                                <label> Time:</label>
                                <select name="time" value={time} onChange={e => setTime(e.target.value)} required>
                                    <option label="Select time" value="">Select time</option>
                                    {
                                        availableTimes.map(item => {
                                            return (
                                                <option value={item} key={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="input-group">
                                <label>No: of Diners</label>
                                <select name="guests" value={guests} onChange={e => setGuests(e.target.value)} required>
                                    <option value="1">1 Diner</option>
                                    <option value="2">2 diners</option>
                                    <option value="3">3 diners</option>
                                    <option value="4">4 diners</option>
                                    <option value="5">5 diners</option>
                                    <option value="6">6 diners</option>
                                    <option value="7">7 diners</option>
                                    <option value="8">8 diners</option>
                                    <option value="9">9 diners</option>
                                    <option value="10">10 diners</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label >Occasion</label>
                                <select
                                    placeholder='Select an occasion'
                                    name="occasion"
                                    value={occasion}
                                    onChange={e => setOccasion(e.target.value)} required>
                                    <option label="Occasion" value="">Select an occasion (optional)</option>
                                    <option label="Birthday" value="Birthday">Birthday</option>
                                    <option label="Anniversary" value="Anniversary">Anniversary</option>
                                    <option label="Business" value="Business">Business</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label aria-label="firstName" htmlFor="firstName">First Name</label>
                                {firstName.error && <small>*Please enter a valid text.</small>}

                                <input
                                    placeholder="First Name"

                                    type='text'
                                    name="firstName"
                                    maxLength="15"
                                    value={firstName.val}
                                    onChange={e => setFirstName({ ...firstName, val: e.target.value })}
                                    onBlur={handleFirstNameBlur}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label aria-label="lastName" htmlFor="lastName">Last Name</label>
                                {lastName.error && <small>*Please enter a valid text.</small>}

                                <input
                                    placeholder="Last Name"
                                    type='text'
                                    name="lastName"
                                    value={lastName.val}
                                    maxLength="15"
                                    onChange={e => setLastName({ ...lastName, val: e.target.value })}
                                    onBlur={handleLastNameBlur}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label aria-label="email" htmlFor="email">Email</label>
                                {email.error && <small>*Please enter a valid email address.</small>}

                                <input
                                    placeholder="E-mail"

                                    type='email'
                                    name="email"
                                    value={email.val}
                                    onChange={e => setEmail({ ...email, val: e.target.value })}
                                    onBlur={handleEmailBlur}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label aria-label="phone" htmlFor="phone">Phone Number e.g +0123456789</label>
                                {phone.error &&
                                    <>
                                        <small>*Phone number should start with + or 0.</small>
                                        <small>*Min & Max 10 numbers.</small>
                                    </>
                                }

                                <input
                                    placeholder="Phone Number"
                                    type='tel'
                                    name="phone"
                                    value={phone.val}
                                    onChange={e => setPhone({ ...email, val: e.target.value })}
                                    onBlur={handlePhoneBlur}
                                    minLength="11" maxLength="11"
                                    required
                                />
                            </div>
                        </div>

                        <div className="center">
                            <button className="btn form-btn" aria-label="On Click confirm booking details" disabled={disableBtn} type="submit">Reserve a Table</button>
                        </div>
                    </form>

                </div>

            </section>
            <section className="display-section">
                <Display />

            </section>
        </>
    )
};
export default BookingForm