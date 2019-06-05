import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <button onClick={()=>this.props.sout('signout')} className='ma3 f3 link dim black pa3 pointer'>sign out</button>
                <button onClick={()=>this.props.sout('studentsapplied')} className='ma3 f3 link dim black pa3 pointer'>StudentsApplied</button>
                <button onClick={()=>this.props.sout('profile')} className='ma3 f3 link dim black pa3 pointer'>Profile</button>
            </nav>
        );
    }
}
export default Navigation;