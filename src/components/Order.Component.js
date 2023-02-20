import React, { Component } from 'react'
import axios from "axios";

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemname:"",
            qty:"",
            shippingaddress:""

        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {itemname,qty,shippingaddress} = this.state;
        axios.post('http://localhost:8080/app/api/v1/order',this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        function showGenre(e) {
            document.getElementById("dropdownMenu1").innerHTML = e.target.innerHTML;

        }
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Place an Order</h3>

                <div className="mb-3">
                    <label>Item Name</label>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" id="dropdownMenu1" onChange={(e)=>this.setState({itemname:e.target.value})}>
                            Select item
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#" onClick={showGenre}>laptop</a></li>
                            <li><a className="dropdown-item" href="#" onClick={showGenre}>mobile</a></li>
                            <li><a className="dropdown-item" href="#" onClick={showGenre}>charger</a></li>

                        </ul>
                    </div>
                </div>

                <div className="mb-3">
                    <label>Quantity</label>
                    <input type="text" className="form-control" placeholder="10" onChange={(e)=>this.setState({qty:e.target.value})}/>
                </div>


                <div className="mb-3">
                    <label>Shipping Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        onChange={(e)=>this.setState({shippingaddress:e.target.value})}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Place Order
                    </button>
                </div>

            </form>
        )
    }
}
