import React, { Component } from 'react'

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  )
  
  const formValid = ({ isError, ...rest }) => {
    let isValid = false;
  
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });
  
    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });
  
    return isValid;
  };
  

export default class Forgot extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }
    
    
    onSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };
    
    
    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
    
        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }
    
        this.setState({
            isError,
            [name]: value
        })
    };

    render(){
        const { isError } = this.state;

  return (
    <form>
    <div>
         <div className="mb-3">
          <label>Email address</label>
          <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
        </div>
        <div className="mb-3">
          <label>Enter The New Password</label>
          <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
        </div>
        <div>
      <label>Enter The New Password Again</label>
          <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
    </div>
    <div className="d-grid my-2">
        <a className="btn btn-primary" href='sign-in' role="button">Submit</a>
        </div>
    </div>
    </form>
  )
}
}
