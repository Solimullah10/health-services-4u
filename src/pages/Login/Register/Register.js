import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import { toast } from 'react-toastify';



const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    if (user) {
        console.log(user)
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate('/home')


    }

    return (
        <div className='register-form'>
            <h1 className='text-center'>Please Register</h1>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='enter your name' required />
                <input type="email" name="email" id="" placeholder='enter your email' required />
                <input type="password" name="password" id="" placeholder='password' required />

                <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none'>Please login</Link></p>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Term and Condition</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary d-block w-50 mx-auto mb-3'
                    type="submit"
                    value="Register" />
            </form>
        </div>
    );
};

export default Register;