import React, { Component } from 'react';
import './signUpForm.css'

export class SignUpForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: "",
       lastName: "",
       username: "",
       email: "",
       password: "",
       isSubmitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {firstName, lastName, username, email, password} = this.state;
    
    let newUser = {
			first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password
    };

    this.setState((state) => ({
      isSubmitted: !state.isSubmitted 
    }))

    this.props.addUser(newUser)
  }
  
  handleChange(e) {
		let key = e.target.name;
		let value = e.target.value;
		this.setState({
			[key]: value
    });
  }
  
  render() {
    { return this.state.isSubmitted ? 
    <form>
      <h1>All Set! <a href="/profile">go to your profile</a></h1>
    </form> : 
    <div className="signUpForm_container">
        <h2 className="signUpForm_title">SignUp</h2>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
          </label>
          <label htmlFor="">
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
          </label>
          <label htmlFor="">
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
          </label>
          <label htmlFor="">
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
          </label>
          <label htmlFor="">
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
          </label>
          <button className="signUpForm_submit">
            SignUp
          </button>
        </form>
      </div>}
  }
}

export default SignUpForm
