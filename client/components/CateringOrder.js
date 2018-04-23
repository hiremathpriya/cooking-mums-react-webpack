import React, { Component } from 'react';

class CateringOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <h2>Catering Order Form</h2>
                    <div className="form">
                    <div className="container">
                        <div>
                            <label id="label" className="customer-label">
                                Name:
                            </label>  
                            <input className="text"type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                    
                    
                        <div>
                            <label className="customer-label">
                            Date of pick-up:
                            </label>
                            <input className="text" type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="customer-label">
                            Phone number:
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                            </div>
                            <div>
                            <label className="customer-label">    
                            Number of guests:
                            </label>
                            <input  className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="customer-label">      
                                Pick up time:
                            </label>
                            <input className="text" type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="orderInfo">          

                        <h3>Place your order</h3>

                        <div className="order-header">  
                            <h5 >Item</h5>
                        </div>
                        <div className="order-header">
                            <h5>Quantity</h5>
                        </div>    
                        <div>
                            <label className="order-label">
                                Goan fish curry with rice:                       
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="order-label">
                            Lamb curry with saffron rice:                      
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="order-label">
                            Chicken makhani with cumin rice:                      
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="order-label">
                            Chicken with tangy button onions with rice:
                            
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label className="order-label">
                            Chickpea curry with cumin rice:                      
                            </label>
                            <input className="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                    </div>         


                    <input className="submit" type="submit" value="Submit" />
                    </div>  
                </form>

            </div>
        );
    }
}

export default CateringOrder;