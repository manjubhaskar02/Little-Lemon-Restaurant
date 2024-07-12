import React from "react";
import { FaMotorcycle } from "react-icons/fa";


const Card = ({ title, description, imageSrc, amount }) => {
    return (
        <>
            <div className="card">
                <img src={imageSrc} alt={title} className="card-image" />
                <div className="card-content">
                    <div className="card-header">
                        <h3>{title}</h3>
                        <span className="amount">{amount}</span>
                    </div>
                    <p className="">{description}</p>
                    <div className="order-link">
                        <a href="#" className="order-link">
                            Order a Delivery

                            <span > <FaMotorcycle />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;