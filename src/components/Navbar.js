import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../logo.png';


const Navbar = ({showAlert}) => {

    let location = useLocation();
    // const [location, setlocation] = useState(second);

    // React.useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);

    // let location = useLocation();

    let sty = null;
    if (!localStorage.getItem('token')) {
        sty = {
            pointerEvents: 'none'
        }
    }

    const handleLogout = () => {
        localStorage.setItem('token', '');
        showAlert('Signed out successfully', 'success');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <span style={{
                        margin: "0 10px"
                    }}>
                        <img src={logo} alt="logo" srcSet="" height="40px" />
                    </span>
                    <Link className="navbar-brand" to="/" style={sty}>saveMe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/" style={sty}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {location.pathname === '/' ?
                            (<form className="d-flex">
                                <Link className="btn btn-primary mx-1" type="button" to="/login" onClick={handleLogout}>SignOut</Link>
                            </form>) : (
                                location.pathname === '/login' ?
                                    (<form className="d-flex">
                                        <Link className="btn btn-primary mx-1" type="submit" to="/signup">SignUp</Link>
                                    </form>) :
                                    (<form className="d-flex">
                                        <Link className="btn btn-primary mx-1" type="submit" to="/login">SignIn</Link>
                                    </form>)
                               )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

