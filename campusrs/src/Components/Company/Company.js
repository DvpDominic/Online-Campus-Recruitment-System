import React, { Component } from 'react';
import './Company.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import StudentApplied from './Components/StudentApplied';
const po = {
  particles:
  {"number":{"value":120,"density":{"enable":true,"value_area":800}}}}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route:'studentsapplied',
      company:props.myuser,
      allstudents:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:3001/studata',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        if(data)
        {
          this.setState({allstudents:data});
        }
    })
    .catch(error=>console.log(error));
  }
  onrotechange = (route) => {
    if(route==="signout")
    {
      this.setState({
        route:'studentsapplied',
        company:{},
      })
      this.props.onroutechange("sc");
    }
    else
    this.setState({route:route});
  }
  render() {
    return (
      <div className="App">
      <div style={{width:'100%',position:'relative',textAlign:'center'}}>
        <Particles params={po} className='particles'/>
        <Navigation sout={this.onrotechange}/>
        <div>
          {
            (this.state.route==="studentsapplied") ? <StudentApplied uid={this.state.company.uId} allstudents={this.state.allstudents} /> :
            (this.state.route==="profile") ? <Profile myuser={this.state.company} /> :
            <div></div>
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;