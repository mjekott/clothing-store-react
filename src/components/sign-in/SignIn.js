import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import BaseButton from "../../components/custom-button/BaseButton";
import "./SignIn.scss";
import { signInWithGoogle } from "../../firebase/firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    console.log(this.state);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <BaseButton type="submit">Sign in</BaseButton>
            <BaseButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </BaseButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
