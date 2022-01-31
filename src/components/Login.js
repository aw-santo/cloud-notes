import React, { useRef } from 'react';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email:emailRef.current.value, password: passRef.current.value})
        });
        const json = await res.json();
        console.log(json);

        if (json.success) {
            // save the auth-token redirect to user notes
            localStorage.setItem('token', json.auth_token);
        }
        else{
            // invalid credentials
            alert("Invalid credentials!🙂");
        }
    }

    return (
        <>
            <form className='my-5'  onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" required autoComplete="on"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passRef} type="password" className="form-control" id="password" name="password"  autoComplete="new-password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    );
}

export default Login;