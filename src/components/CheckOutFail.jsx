import React from 'react';
import { Link } from 'react-router-dom';
import successIcon from '../assets/images/exclamation.png'; 

const CheckOutFail = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '80vh',
        padding: '20px'
    };

    const contentStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    };

    const iconStyle = {
        width: '100px',
        height: '100px',
        marginBottom: '20px'
    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '20px'
    };

    const paragraphStyle = {
        fontSize: '1rem',
        marginBottom: '20px'
    };

    const linkStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: 'black', 
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none'
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <img src={successIcon} alt="Success" style={iconStyle} />
                <h1 style={headingStyle}>Payment Unseccessful!</h1>
                <p style={paragraphStyle}>
                    Order was not placed. If you have any questions, please email
                    <a href="mailto:GreentreasureLK@gmail.com"> GreentreasureLK@gmail.com</a>.
                </p>
                <Link to="/shop" style={linkStyle}>Continue Shopping</Link>
            </div>
        </div>
    );
};

export default CheckOutFail;
