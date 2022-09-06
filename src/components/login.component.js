import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login= ()=> {
const [credentials, setCredentials] = useState({email: "", password: ""})
let navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
  console.log(json);
  if (json.success){
    // save the authtoken and redirect
    localStorage.setItem('token',json.authtoken);
    navigate("/homepage")
  }
  else{
    alert("Invalid Credentials")
  }
  };

  const onChange = (e)=>(
  setCredentials({...credentials, [e.target.name]: e.target.value})
  )
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control" onChange={onChange}
          name="email" value={credentials.email}
          id='email'/>
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"  onChange={onChange}
          name="password" value={credentials.password}
          id='password'
        />
       
      </div>
      <div >
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
    </>
  )
}

export default Login;