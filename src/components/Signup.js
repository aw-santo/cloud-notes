import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

    let navigate = useNavigate();

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const cpassRef = useRef('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (passRef.current.value !== cpassRef.current.value) {
            return props.showAlert("Password not matching", 'warning');
        }

        const res = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: nameRef.current.value, email: emailRef.current.value, password: passRef.current.value })
        });
        const json = await res.json();
        console.log(json);

        if (json.success) {
            // save the auth-token redirect to user notes
            localStorage.setItem('token', json.auth_token);
            navigate('/');
            props.showAlert("Successfully created ypur account", 'success');
        }
        else {
            // invalid credentials
            props.showAlert(json.error, 'danger');
        }
    }

    return (
        <>
            <div className='container'>
                <h2>Create a user</h2>
                <form className='my-5' onSubmit={handleSignUp}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input ref={nameRef} type="text" className="form-control" id="name" aria-describedby="name" name='name' minLength={3} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email'  required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" id="pass" name='password' minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpass" className="form-label">Confirm Password</label>
                        <input ref={cpassRef} type="password" className="form-control" id="cpass" name='cpass' required/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default Signup;