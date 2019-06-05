import React, { Component } from "react";
import '../Company.css';
class MyApps extends Component{

    render(){
        let c=this.props.uid;
        let d=this.props.allstudents;
        return(
            <div className='dib br3 pa3 ma2 bw2 shadow-5 tc content-box-large-dash-comp'>
            {
                Object.entries(d).map(dd=>{
                    if(dd[1].hasOwnProperty("appliedToCompanies"))
                    {
                        return(
                            <div>
                            {
                                dd[1].appliedToCompanies.map(ddd=>{
                                    if(ddd.companyUid===c)
                                    {
                                        return(
                                            <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
                                                <div>Name : {dd[1].name}</div>
                                                <div>Email : {dd[1].email}</div>
                                                <div>JobId : {Number(ddd.indexNo)+1}</div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>)
                    }
                    else
                        return <div></div>
                })
            }
            </div>
        );
    }
}
export default MyApps;