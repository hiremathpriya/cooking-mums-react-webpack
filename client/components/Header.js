import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      
        <header className="header">
          <nav className="navbar navbar-default">
            <div className="col-xs-3">
              <h1 className="header-title">
                {this.props.title}
              </h1>
            </div>  
            <div className="mt-2">
              <ul className="col-xs-6 list-inline">
                <li className="">
                  <Link to="/">Home</Link>
                </li>
                <li className="">
                  <Link to="/aboutme">About Me</Link>
                </li>
                <li className="">
                  <Link to="/CateringOrder">Catering Order</Link>
                </li>
                <li className="">
                  <Link to="/Register">Register</Link>
                </li>
              </ul>
            </div>  
           
          </nav>
        </header>
        
      
    );
  }
}

export default Header;
