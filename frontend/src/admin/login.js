import React, { useState } from "react";
import "../admin/index.css";
import bg1 from "../assets/logo2.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:2702/login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/Dashboard');
                } else {
                    alert("Login failed. Please check your username and password.");
                }
            })
            .catch(error => {
                console.error("Error during login:", error);
                if (error.response) {
                    console.error("Server responded with an error:", error.response.data);
                } else if (error.request) {
                    console.error("No response received from the server");
                } else {
                    console.error("Request configuration error:", error.message);
                }
                alert("An error occurred during login. Please try again later.");
            });

    };

    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
                        <div className="card shadow my-auto bg-dark" style={{ width: "25rem" }}>
                            <div className="card-body text-white shadow">
                                <div className="container d-flex justify-content-center">
                                    <a className="navbar-brand text-white ml-2 mt-4" href="/Login">
                                        <img src={bg1} alt="Logo" style={{ height: "2rem" }} />
                                    </a>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="inputbox mx-auto mt-5 ">
                                        {/* Perubahan di sini: gunakan type="text" */}
                                        <input
                                            required="required"
                                            type="text"
                                            value={values.username}
                                            onChange={e => setValues({ ...values, username: e.target.value })}
                                        />
                                        <span>Username</span>
                                        <i></i>
                                    </div>
                                    <div className="inputbox mx-auto mt-4 ">
                                        {/* Perubahan di sini: gunakan type="password" */}
                                        <input
                                            required="required"
                                            type="password"
                                            value={values.password}
                                            onChange={e => setValues({ ...values, password: e.target.value })}
                                        />
                                        <span>Password</span>
                                        <i></i>
                                    </div>

                                    <div className="container mt-3 d-flex justify-content-center mb-4">
                                        <button className="button fw-bold">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
