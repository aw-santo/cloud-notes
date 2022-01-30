import React from 'react';
import Notes from './Notes';

const Home = () => {
  return (
    <>
      <div className="container my-2">
        <h2>Add a note</h2>
        {/* <form className='my-5'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="username" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control bb" id="exampleInputPassword1" autoComplete="current-password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input grow" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary grow">Login</button>
          <button type="submit" className="btn btn-primary grow mx-5">Register</button>
        </form> */}
        <Notes />
      </div>
    </>
  );
};

export default Home;