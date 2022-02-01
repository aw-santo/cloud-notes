import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import 'tachyons';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (mesg, tp) => {
    setAlert({
      msg: mesg,
      type: tp
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }

  return (
    <>
      <NoteState>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container"  style={{marginTop: '130px'}}>

          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>

        </div>

      </NoteState>
    </>
  );
}

export default App;
