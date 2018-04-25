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
// import image from '../../images/background.jpg';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

/*
const imagesArr = [
  'images/0004.jpg',
  'images/0006.jpg',
  'images/0008.jpg',
  'images/0010.jpg',
  'images/0011.jpg',
  'images/0012.jpg',
  'images/0013.jpg',
  'images/0015.jpg',
  'images/0017.jpg',
  'images/0027.jpg',
  'images/0028.jpg',
  'images/0033.jpg',
  'images/0035.jpg',
  'images/0037.jpg',
  'images/0040.jpg',
  'images/0044.jpg',
  'images/0046.jpg',
  'images/0048.jpg',
  'images/0052.jpg',
  'images/0055.jpg',
  'images/0059.jpg',
  'images/0060.jpg',
  'images/0061.jpg',
  'images/0064.jpg',
  'images/0065.jpg',
  'images/0066.jpg',
  'images/0067.jpg',
  'images/0072.jpg',
  'images/0083.jpg',
  'images/0085.jpg',
  'images/0086.jpg',
  'images/0088.jpg',
  'images/0089.jpg',
  'images/0102.jpg',
  'images/0105.jpg',
  'images/0106.jpg',
  'images/0107.jpg',
  'images/0109.jpg',
  'images/0110.jpg',
  'images/0113.jpg',
  'images/0114.jpg',
  'images/0117.jpg',
  'images/0118.jpg',
  'images/0119.jpg',
  'images/0120.jpg',
  'images/0122.jpg',
  'images/0123.jpg',
  'images/0124.jpg',
  'images/0128.jpg',
  'images/0129.jpg',
  'images/0130.jpg',
  'images/0133.jpg',
  'images/0134.jpg',
  'images/0135.jpg',

];
*/

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
          <CoverFlow width={1200}height={350} background="black" imagesArr={this.state.imagesArr} />

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
