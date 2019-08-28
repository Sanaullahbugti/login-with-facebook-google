import React, { Component } from 'react';
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {
  state = {
    user: null
  }
  responseFacebook = (response) => {
    this.setState({
      user: response
    })
  }
  render() {

    const { user } = this.state
    console.log(user)

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId=""
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        <br />
        <br />
        {user !== null && 
        <div><img src={user.picture.data.url} 
        alt="no profile pic" 
        style={{ width: "100px", height: "100px" }} 
        />
        <h4>you are login as {user.name}</h4>
        </div>}
      </div>
    );
  }
}

export default App;
