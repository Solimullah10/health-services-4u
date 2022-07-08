import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleIcon from '../../../images/logo/google.png'


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error || error1) {
        errorElement =
            <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }


    return (
        <div>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form className='container' onSubmit={handleSignIn} >
                <Form.Group className="mb-3 w-50 d-block mx-auto" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 d-block mx-auto" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                </Form.Group>
                <Button className='btn btn-primary d-block w-25 mx-auto mb-3' variant="primary" type="submit">
                    <img src={googleIcon} alt="" />
                    <span>Login</span>
                </Button>
            </Form>
            {errorElement}
            <p className='text-center ' style={{ "margin-bottom": '0px' }}>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p className='text-center ' style={{ "margin-bottom": '0px' }}>Forget Password? <button className=' btn btn-link text-success text-decoration-none' onClick={resetPassword}>Forget Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;