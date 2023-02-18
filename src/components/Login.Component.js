import React, { Component } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit =async (e)=>{
        const {username,password} =this.state;
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:8083/app/api/v1/client/login',
                JSON.stringify({username, password}),
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials:true
                });
        }catch (error){
            console.log(error);
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={(e)=>this.setState({username:e.target.value})}
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

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" >
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        )
    }
}