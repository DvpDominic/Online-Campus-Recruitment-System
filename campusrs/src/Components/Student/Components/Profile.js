import React, { Component } from "react";
import '../Student.css';
class Profile extends Component{
    render(){
        let s=this.props.myuser;
        return(
            <div>
            <div className="f1 header container row col-md-3">My Profile
	              </div>
            <div className='dib br3 pa3 ma2 bw2 shadow-5 tc content-box'>
                {
                    Object.entries(s).map(ele=>{
                        if(ele[0]==="appliedToCompanies" || ele[0]==="uId" || ele[0]==="student")
                            return <div></div>
                        else if(ele[0]==="details" || ele[0]==="positionOfResponsibility")
                        {
                            return(
                                <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc '>
                                    <div>{ele[0]}</div>
                                    {
                                        Object.entries(s.details).map((i,index)=>{
                                            return <div>{index+1}. {i[1]}</div>
                                        })
                                    }
                                </div>
                            );
                        }
                        else if(ele[0]==="internships" || ele[0]==="jobs" || ele[0]==="projects" || ele[0]==="trainings")
                        {
                            return(
                                <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc '>
                                    <div>{ele[0]}</div>
                                    {
                                        ele[1].map((ci,index)=>{
                                            return(
                                            <div>
                                            <div>{index+1}</div>
                                            {
                                                Object.entries(ci).map(cii=>{
                                                    return <div>{cii[0]} : {cii[1]}</div>
                                                })
                                            }
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        else
                            return <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>{ele[0]} : {ele[1]}</div>
                    })
                }
            </div>
            </div>
        );
    }
}
export default Profile;