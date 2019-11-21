import React from "react";
import Axios from 'axios'
import ImageUploader from 'react-images-upload';
import "./profile.css"

class Profile extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allUsers: [],
       currentUser: {},
       pictures: [],
       isSubmitted: false,
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  componentDidMount() {
    this.getCurrentUser()
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
      isSubmitted: !this.state.isSubmitted 
    });
  }

  getCurrentUser() {
    return Axios.get(`/users`)
    .then(({data}) => {
      let allUsers = data;
      let currentUser = data[data.length - 1];
      Axios.get(`/users/${currentUser.id}`)
      .then(({data})=> {
        this.setState({
          allUsers,
          currentUser: data[0]
        })
      })
    })
    .catch(err => {
      console.error("Error getting user", err)
    })
  }

  render() {
    console.log("state: ",this.state)
    return (
      <div>
        <div className="profile_header_container">
          <div className="profile_header_container_info">
            <p className="profileTexts">{this.state.currentUser.username}</p> 
            <p className="profileTexts">Hack Reactor</p>
          </div>
          {this.state.pictures.length > 0 ? 
          <div className="profile_header_container_photo">
             <img src={this.state.pictures[0].name} alt="In the future your image will appear here!" />
          </div> :
          <ImageUploader
                withIcon={true}
                buttonText='Add image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                className="imgLoad"
                label=""
            />
          }
          <div className="profile_header_container_title">
            <p className="profileTexts">Software Engineer</p>
            <p className="profileTexts">{this.state.currentUser.email}</p>
          </div>
        </div>
        <div className="profile_header_container_bio">
          Tell me about yourself?
          <br/>
          <input type="textarea"/>
        </div>
      </div>
    );
  }
}

export default Profile;