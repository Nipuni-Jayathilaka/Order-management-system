import logo from './logo.svg';
import './App.css';
import SignUp from "./components/Signup.Component";
import Login from "./components/Login.Component";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Order from "./components/Order.Component";

function App() {
  return (
      <Router>
          <div className="App container">

              <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                  <div className="container-fluid">

                      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                           aria-labelledby="offcanvasNavbarLabel">
                          <div className="offcanvas-header">

                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                      aria-label="Close"></button>
                          </div>
                          <div className="offcanvas-body">
                              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                  <li className="nav-item">
                                      <Link className="nav-link active" to={'/sign-in'}>
                                          Login
                                      </Link>
                                  </li>
                                  <li className="nav-item">
                                      <Link className="nav-link" to={'/sign-up'}>
                                          Sign up
                                      </Link>
                                  </li>

                              </ul>

                          </div>
                      </div>
                  </div>
              </nav>

              <div className="auth-wrapper">
                  <div className="auth-inner">
                      <Routes>
                          <Route exact path="/" element={<Login />} />
                          <Route path="/sign-in" element={<Login />} />
                          <Route path="/sign-up" element={<SignUp />} />
                          <Route path="/order" element={<Order />} />
                      </Routes>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
