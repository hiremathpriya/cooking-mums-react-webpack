import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Footer extends Component {
  render() {
    return (
      
        <footer className="footer">
          <nav className="navbar navbar-default">
            <div className="col-xs-3">
              <h1 className="header-title">
                {this.props.title}
              </h1>
            </div>  
            <div className="mt-2">
              <ul className="col-xs-6 list-inline">
                <li className="">
                  <Link to="/">Facebook</Link>
                </li>
                <li className="">
                  <Link to="/Linkdin">Linkdin</Link>
                </li>
                <li className="">
                  <Link to="/pinterest">pinterest</Link>
                </li>
            
                </ul>
            </div>  
            
          </nav>
        </footer>
        
      
    );
  }
}

export default Footer;
