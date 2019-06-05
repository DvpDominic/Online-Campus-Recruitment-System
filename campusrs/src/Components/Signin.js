import React, { Component } from 'react';

class Signin extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    onemailchange=(event)=>{
       // console.log(event.target.value);
        this.setState({email:event.target.value});
    }
    onpasswordchange=(event)=>{
        //console.log(event.target.value);
        this.setState({password:event.target.value});
    }
    onsubmitsignin=(e)=>{
        e.preventDefault();
      fetch('http://localhost:3001/signin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data)
            {
                if(data.student)
                    {this.props.loaduser(data);this.props.onroutechange("student");}
                else
                    {this.props.loaduser(data);this.props.onroutechange("company");}
            }
        })
        .catch(error=>console.log(error))
    }
    render(){
        return(
            <div>
            <div className="header container row col-md-5">
	                 <h1>Campus Recruitment Syestem</h1>
	              </div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                                <main className="pa4 black-80">
                <form className="box" onClick={this.onsubmitsignin}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={this.onemailchange} className=" w-100 content-box" type="email" name="email-address" placeholder="Your Email Address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input autoComplete="on" onChange={this.onpasswordchange} className=" w-100 content-box" type="password" name="password" placeholder="Your Password" id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset grow pointer f6 dib signinbutton" type="submit" value="Sign in"  />
                    </div>
                </form>
                </main>
                </article>
                </div>
        );
    }
}
export default Signin;