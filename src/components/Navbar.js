import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
      //  router

export default function  Nav(props){
    return(        
        <nav className={`navbar navbar-expand-lg navbar-${props.bod} bg-${props.bod} `} >
          <div className="container-fluid">
            <a className="navbar-brand" href="">{props.tittle}</a>
            {/* <Link className="navbar-brand" to="/">{props.tittle}</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="">{props.home}</a>
                  {/* <Link className="nav-link" to="/">{props.home}</Link> */}
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="">{props.about}</a>
                  {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button className="btn btn-outline-success " type="submit">Search</button>
              </form> */} 
               <div className={`form-check form-switch text-${props.bod==='light'?'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
                  <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked">Enable dark mode</label>
                </div>
            </div>
          </div>
        </nav>
    );
}

Nav.propTypes={
    tittle:PropTypes.string ,
    home:PropTypes.string,
    about:PropTypes.string
}
Nav.defaultProps={
    tittle:'shetty',
    home:'Home',
    about:'About'
}