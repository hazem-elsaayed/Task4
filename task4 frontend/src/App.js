import React, { Component } from 'react';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        date: '',
      },
    };
  }

  //Routing functions to handle renered components
  Routing = (route) => {
    this.setState({ route: route });
  };

  //retrieving user data from signin and storing in state
  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        date: user.date,
      },
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === 'home' ? (
          <div>
            <br></br>
            <h1>Welcome {this.state.user.name}</h1>
          </div>
        ) : this.state.route === 'signin' ? (
          <Signin loadUser={this.loadUser} routeChange={this.Routing}  />
        ) : (
          <Register routeChange={this.Routing} />
        )}
      </div>
    );
  }
}

export default App;
