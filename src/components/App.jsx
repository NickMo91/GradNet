import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to GradNet</h1>
        <SignUpForm/>
      </div>
    );
  }
}

export default App;