import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm"
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allUsers: [],
       firstName: "",
       lastName: "",
       username: "",
       email: "",
       currentUser: {},
    }
    this.getUsers = this.getUsers.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    return Axios.get(`/users`)
    .then(({data}) => {
      this.setState({
        allUsers: data
      })
    })
    .catch(err => {
      console.error("Error getting user", err)
    })
  }
  
  addNewUser(user) {
		Axios.post('/users', user)
			.then(() => {
				return this.getUsers();
			})
			.catch((err) => {
				console.error(err);
			});
  }
  
  render() {
    console.log("state: ", this.state.allUsers)
    return (
      <div>
        <h1 className="homeTitle">Welcome to GradNet</h1>
        <SignUpForm addUser={this.addNewUser}/>
      </div>
    );
  }
}

export default App;