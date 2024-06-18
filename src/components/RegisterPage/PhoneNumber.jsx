import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../../styles/Register.css';

const PhoneNumber = ({ onPhoneNumberChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
        onPhoneNumberChange(event.target.value);
    };

    return (
        <div className='phoneNum'>
            <TextField 
                id="outlined-basic-phone"
                label="Phone Number"
                variant="outlined"
                sx={{
                    bgcolor: '#EFEFEF',
                    borderRadius: 10,
                    width: 636,
                }}
                InputLabelProps={{
                    style: { color: '#6A6A6A' } // Default text color
                }}
                value={phoneNumber}
                onChange={handleChange}
            />
        </div>
    );
};

export default PhoneNumber;
