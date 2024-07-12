import React from 'react';
import TestimonialCard from './TestimonalCard';

const testimonials = [
    {
        rating: 5,
        getImageSrc: () => require("../images/john.jpg"),
        name: 'John Doe',
        review: 'Amazing food and service!'
    },
    {
        rating: 4,
        getImageSrc: () => require("../images/jane.jpg"),
        name: 'Jane Smith',
        review: 'Great atmosphere and delicious meals.'
    },
    {
        rating: 5,
        getImageSrc: () => require("../images/paul.jpg"),
        name: 'Paul Adams',
        review: 'A wonderful experience from start to finish.'
    },
    {
        rating: 3,
        getImageSrc: () => require("../images/lisa.jpg"),
        name: 'Lisa Brown',
        review: 'Good food but the service was a bit slow.'
    }
];

const Testimonial = () => {
    return (
        <article className="testimonal-section">
            <h2 className='center'>Testimonals</h2>
            <div className="testimonials">

                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        rating={testimonial.rating}
                        imageSrc={testimonial.getImageSrc()}

                        name={testimonial.name}
                        review={testimonial.review}
                    />
                ))}
            </div>
        </article>
    );
};

export default Testimonial;
