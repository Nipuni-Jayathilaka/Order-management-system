import logo from './logo.svg';
import './App.css';
import SignUp from "./components/Signup.Component";
import Login from "./components/Login.Component";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
      <Router>
          <div className="App container">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <Link className="nav-link" to={'/sign-in'}>
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
              </nav>

              <div className="auth-wrapper">
                  <div className="auth-inner">
                      <Routes>
                          <Route exact path="/" element={<Login />} />
                          <Route path="/sign-in" element={<Login />} />
                          <Route path="/sign-up" element={<SignUp />} />
                      </Routes>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
