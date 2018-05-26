import React, { Component } from 'react';
import CoverFlow from 'coverflow-react';
import { getImages } from '../api';
import Header from './Header';

import CateringOrder from './CateringOrder';
import Message from './Message';
import Recipes from './Recipes';
import Footer from './Footer';
import Register from './Register';
import AboutMe from './AboutMe';


import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imagesArr: []
    }

    this.renderImages = this.renderImages.bind(this);
    this.refreshImages = this.refreshImages.bind(this);
  }

  renderImages(err, images) {

    //console.log('inside app.js ', images)

    const imagesForCoverFlow = images.map(image => {

      return image.imgname
    });

    //console.log('passing to coverflow', imagesForCoverFlow);

    this.setState({
      imagesArr: imagesForCoverFlow
    });
  }

  refreshImages() {
    getImages(this.renderImages);
  }

  componentDidMount() {

    this.refreshImages();
  }

  render() {

    console.log('images ', this.state.imagesArr);

    return (
      <Router>
      <div className="App">
      <div className="site-container">
        <Header title="Cooking Mums"/>
          <CoverFlow width={1200}height={350} background="black" imagesArr={this.state.imagesArr} /*labelsArr={this.state.imagesArr}*//>

              <Route path="/" exact render={
                ()=> {
                  return(              
                <div className="container">
                    <div class="row">
                        <div class="col-xs-6">
                            <Message />
                        </div>
                        <div class="col-xs-6">
                            <Recipes />
                        </div>
                    </div>
                </div>
                      
                  
                  )
                }
              }/>
                          
              <Route path="/CateringOrder"  exact render={
                ()=> {
                  return(<CateringOrder/>)
                }
              }/>

              <Route path="/Register"  exact render={
                ()=> {
                  return(<Register/>)
                }
              }/>

              <Route path="/AboutMe"  exact render={
                ()=> {
                  return(<AboutMe/>)
                }
        }/>
      </div>
        
            
            <Footer/>   

      </div>
      </Router>
    );
  }
}

export default App;
