import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import pots from './0005.jpg';

class Recipes extends Component {
  render() {
    return (
      
        <div className="recipes col">
          <nav className="navbar navbar-default"> 
            <ul>
                <li>
                  <Link to="/">Indian Lamb Curry with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Goan Fish Curry with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Makhani Chicken with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Mix Vegetable Curry with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Mix Vegetable Curry with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Mix Vegetable Curry with Rice and Roti</Link>
                </li>
                <li>
                  <Link to="/">Mix Vegetable Curry with Rice and Roti</Link>
                </li>
              </ul>
            
          </nav>
        </div>
        
      
    );
  }
}

export default Recipes;
