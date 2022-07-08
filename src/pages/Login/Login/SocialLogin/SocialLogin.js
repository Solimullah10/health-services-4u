import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../../shared/Loading/Loading';
import googleIcon from '../../../../images/logo/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
            </div>
        );
    }

    if (user || user1) {
        navigate('/home');
    }



    return (
        <div className='container'>
            <div className='d-flex align-items-center mb-2 d-block w-25 mx-auto'>
                <div style={{ "height": '1px' }} className='w-50 bg-secondary'></div>
                <p className='m-2'>or</p>
                <div style={{ "height": '1px' }} className='w-50 bg-secondary'></div>
            </div>
            <div className='md-w-100 w-50 d-block mx-auto mb-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto mb-2'>
                    <img className='me-2' src={googleIcon} alt="" />
                    <span className='ms-2'>Google Sign</span>
                </button>

            </div>
            {
                errorElement
            }
        </div>

    );
};

export default SocialLogin;