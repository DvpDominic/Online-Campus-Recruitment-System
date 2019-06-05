import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <button onClick={()=>this.props.sout('signout')} className='f3 link dim black pa3 pointer'>sign out</button>
                <button onClick={()=>this.props.sout('dashboard')} className='f3 link dim black pa3 pointer'>DashBoard</button>
                <button onClick={()=>this.props.sout('myapps')} className='f3 link dim black pa3 pointer'>myApps</button>
                <button onClick={()=>this.props.sout('profile')} className='f3 link dim black pa3 pointer'>Profile</button>
            </nav>
        );
    }
}
export default Navigation;