import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [input, changeInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {

        if (
            !input.name ||
            !input.phone ||
            !input.email ||
            !input.password ||
            !input.confirmPassword
        ) {
            alert("Please fill all fields");
            return;
        }

        if (input.password !== input.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        axios.post("http://localhost:3030/signup", input)
            .then((response) => {

                console.log(response.data);

                if (response.data.status === "success") {
                    alert("Account Created Successfully");
                } else {
                    alert(response.data.status);
                }

            })
            .catch((error) => {

                console.log(error);
                alert("Signup Failed");

            });

    };

    return (

        <div>

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">
                                Sign Up
                            </h2>

                            <div className="row g-3">

                                <div className="col-12">
                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={input.name}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={input.phone}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={input.email}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="password"
                                        value={input.password}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="confirmPassword"
                                        value={input.confirmPassword}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col-12 text-center">

                                    <button
                                        className="btn btn-success me-3"
                                        onClick={readValue}
                                    >
                                        Sign Up
                                    </button>

                                    <Link
                                        to="/sign-in"
                                        className="btn btn-secondary"
                                    >
                                        Back to Login
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default SignUp;