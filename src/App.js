import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import 'tachyons';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert />
        <div className="container">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </div>

      </NoteState>
    </>
  );
}

export default App;
