import React, { Component } from 'react';
import './Student.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import MyApps from './Components/MyApps';
import Profile from './Components/Profile';

const po = {
  particles:
  {"number":{"value":120,"density":{"enable":true,"value_area":800}}}}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route:'dashboard',
      student:props.myuser,
      companies:[],
      allcompanies:[]
    }
  }
  componentWillMount(){
    this.state.student.appliedToCompanies.forEach((i)=>{
      fetch('http://localhost:3001/company',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
              uid:i.companyUid
          })
      })
      .then(response => response.json())
      .then(data => {
          if(data)
          {
             this.setState((prevstate)=>{
                 prevstate.companies.push({
                     contactNumber:data.contactNumber,
                     email:data.email,
                     name:data.name,
                     uId:data.uId,
                     postjobdetails:data.postJobDetails[i.indexNo]
                 })
             });
          }
      })
      .catch(error=>console.log(error));
  })
    fetch('http://localhost:3001/comdata',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data)
        {
          this.setState({allcompanies:data});
        }
    })
    .catch(error=>console.log(error));
  }
  onrotechange = (route) => {
    if(route==="signout")
    {
      this.setState({
        route:'dashboard',
        student:{},
        companies:[],
        allcompanies:[]
      })
      this.props.onroutechange("sc");
    }
    else
    this.setState({route:route});
  }
  render() {
    console.log(this.state.allcompanies)
    return (
      <div className="App">
      <div style={{width:'100%',position:'relative',textAlign:'center'}}>
        <Particles params={po} className='particles'/>
        <Navigation sout={this.onrotechange}/>
        <div>
          {
            (this.state.route==='dashboard') ? <Dashboard allcompanies={this.state.allcompanies} myuser={this.state.student}/> :
            (this.state.route==="myapps") ? <MyApps companies={this.state.companies} myuser={this.state.student} /> :
            (this.state.route==="profile") ? <Profile myuser={this.state.student} /> :
            <div></div>
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;