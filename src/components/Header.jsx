
import React from 'react';
import logo from '../img/legidox-logo.jpeg';
import  '../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            // <div className="container">
                // <div className="row">
                //     <div className="col-1"></div>
                //     <div className="col-10">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/#/caseDetails">
                                <img src={logo} alt={"logo"} ></img>
                            </a>
               
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav mr-auto alignmentCenter">
                                    <li className="nav-item">
                                        <a style={{fontWeight: 'bold'}} className="nav-link" href="/#/caseDetails">HOME</a>
                                    </li>
                               
                                </ul>
                            </div>
                        </nav>
                //     </div>
                //     <div className="col-1"></div>
                // </div>
            // </div>
);
    }
}

export default Header;