import React, { Component } from 'react'
import axios from "axios";
import {Route} from "react-router-dom";
import Login from "./Login.Component";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            address:"",
            username:"",
            password:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8083/app/api/v1/client',this.state,{
            headers:{
                'content-type':'application/json'
            }
        })
            .then(response=>{
                alert("Client added successfully");
                window.location.href='/';

            })
            .catch(error=>{
                alert(error)
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e)=>this.setState({firstName:e.target.value})}
                    />
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>this.setState({lastName:e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label>username</label>
                    <input type="text" className="form-control" placeholder="username" onChange={(e)=>this.setState({username:e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={(e)=>this.setState({address:e.target.value})}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        )
    }
}
