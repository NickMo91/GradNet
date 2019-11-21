import React, { Component } from 'react';
import './signUpForm.css'

export class SignUpForm extends Component {
  render() {
    return (
      <div className="signUpForm_container">
        <h2 className="signUpForm_title">SignUp</h2>
        <form className="signUpForm">
          <label htmlFor="">
            First Name:
            <input type="text"/>
          </label>
          <label htmlFor="">
            Last Name:
            <input type="text"/>
          </label>
          <label htmlFor="">
            Username:
            <input type="text"/>
          </label>
          <label htmlFor="">
            Email:
            <input type="text"/>
          </label>
          <label htmlFor="">
            Password
            <input type="text"/>
          </label>
          <button className="signUpForm_submit">
            SignUp
          </button>
        </form>
      </div>
    )
  }
}

export default SignUpForm
