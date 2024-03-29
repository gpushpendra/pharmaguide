import React from 'react'
import logo from "../img/logo.svg";


export default function Header(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} headBg `}>
      <div className="container-fluid ">
      <img className='p-2' src={logo}  alt={logo} />        <a className="text-warning navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href='/about'>About Us</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
              </ul>
            </li> */}
            <li className="nav-item">
            </li>
          </ul>
          <a className="nav-link" href='/Login'><button className="btn btn-outline btn-sm  text-white" type="submit">Log in</button></a>
          <a className="nav-link " href='/Signup'><button className="btn btn-outline btn-sm text-white" type="submit">Sign up</button></a>

        </div>
      </div>
    </nav>
    
    
  )
}


