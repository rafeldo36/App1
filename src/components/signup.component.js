import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/sign-in")
        } else {
           alert("Invalid Credentials")
        }
    };

    const onChange = (e) => (
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    )

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name" onChange={onChange}
                    id="name"
                />

            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email" onChange={onChange}
                    id="email"

                />

            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password" onChange={onChange}
                    id="password" minLength={5} required

                />
            </div>
            <div className="mb-3">
                <label>Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="cpassword" onChange={onChange}
                    id="cpassword" minLength={5} required

                />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}

export default SignUp;