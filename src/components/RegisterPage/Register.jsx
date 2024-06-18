import '../../styles/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from '../../assets/logo.png';
import LoginGreen from '../LoginPage/LoginGreen';
import UserName from './UserName';
import PhoneNumber from './PhoneNumber';
import PasswordReg from './PasswordReg';
import ConfirmPassword from './ConfirmPassword';
import RetrieveEmail from './RetrieveEmail';
import RegisterImage from './RegisterImage';
import UserRole from './UserRole';
import { Link } from "react-router-dom";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (firstName, lastName) => {
        setFirstName(firstName);
        setLastName(lastName);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };

    const handleConfirmPasswordChange = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
    };

    const handleRoleChange = (role) => {
        setRole(role);
    };

    const handlePhoneNumberChange = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
    };

    const handleSubmit = async () => {
        if (!role) {
            alert('Please select a role!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        let domain;
        if (role === 'XYZ') {
            domain = 'xyz.com';
        } else if (role === 'Centra') {
            domain = 'centra.com';
        } else if (role === 'Harbor') {
            domain = 'harbor.com';
        } else if (role === 'Admin') {
            domain = 'admin.com';
        } else {
            domain = 'mail.com';
        }

        const email = `${firstName}${lastName}@${domain}`.toLowerCase();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert(`User registered successfully as ${email}!`);

            if (domain === 'admin.com') {
                navigate('/admin');
            } else if (domain === 'centra.com') {
                navigate('/centra');
            } else if (domain === 'harbor.com') {
                navigate('/harbor');
            } else if (domain === 'xyz.com') {
                navigate('/xyz');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user: ' + error.message);
        }
    };

    return (
        <div className='Register'>
            <div className='RegisterTextBox'>
                <img src={Logo} className="appLogo" alt="logo" />
                <div className='RegisterText'>Create an account</div>
                <UserName onNameChange={handleNameChange} />
                <PhoneNumber onPhoneNumberChange={handlePhoneNumberChange} />
                <UserRole onRoleChange={handleRoleChange} />
                <PasswordReg onPasswordChange={handlePasswordChange} />
                <ConfirmPassword onConfirmPasswordChange={handleConfirmPasswordChange} />
                <RetrieveEmail onSubmit={handleSubmit} />
                <div className='backToLogin'>
                    <Link to="/"> Already have an account? Sign in here! </Link>
                </div>
            </div>
            <LoginGreen />
            <RegisterImage />
        </div>
    );
}

export default Register;
