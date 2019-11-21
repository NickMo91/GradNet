import React from "react";
import Axios from 'axios'
import "./profile.css"

class Profile extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allUsers: [],
       current_user: {}
    }
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
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

  // getCurrentUser(id) {
  //   const current_user = this.state.allUsers.reduce((curUser, user) => {
  //     return user.id === id ? curUser = user : "user Doesn't exist";
  //   }, {})

  //   return current_user;
  // }
  
  render() {
    return (
      <div>
        <h1>Welcome to userProfile</h1>
        <div className="profile_header_container">
          <div className="profile_header_container_info">
            <p>userName: Nikolas</p> 
            <p>boot camp name: Hack Reactor</p>
          </div>
          <div className="profile_header_container_photo">
             <img src="" alt="Your photo Here!"/>
          </div>
          <div className="profile_header_container_title">
            <p>job title: Software Engineer</p>
            <p>email: myemail@gmail.com</p>
          </div>
        </div>
        <div className="profile_header_container_bio">
          Tell me about yourself?
        </div>
      </div>
    );
  }
}

export default Profile;