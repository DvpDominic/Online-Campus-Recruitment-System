import React, { Component } from 'react';
import './App.css';
import Signin from './Components/Signin';
import Particles from 'react-particles-js';
import Student from "./Components/Student/Student";
import Company from './Components/Company/Company';

const po = {
  particles:
  {"number":{"value":120,"density":{"enable":true,"value_area":800}}}}

class App extends Component {
  constructor(){
    super();
    this.state = {
      route : 'sc',
      user:{}
    }
  }
  onroutechange = (route) => {
    if(route==="sc")
      this.setState({user:{}})
    this.setState({route:route});
  }
  loaduser = (user) => {
    this.setState({user:user});
  }
  render() {
    return (

      <div className="App">
      <div style={{width:'100%',position:'relative',textAlign:'center'}}>
        <Particles params={po} className='particles'/>
        {
          (this.state.route==='sc') ? <Signin onroutechange={this.onroutechange} loaduser={this.loaduser}/> :
          (this.state.route==='student') ? <Student onroutechange={this.onroutechange} myuser={this.state.user}/> :
          (this.state.route==='company') ? <Company onroutechange={this.onroutechange} myuser={this.state.user}/> :
          <div></div>
        }
        </div>
      </div>
    );
  }
}

export default App;