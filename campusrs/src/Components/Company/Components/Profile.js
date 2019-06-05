import React, { Component } from "react";

class Profile extends Component{
    render(){
        let s=this.props.myuser;
        return(
            <div className='dib br3 pa3 ma2 bw2 shadow-5 tc conent-box-large-dash'>
                {
                    Object.entries(s).map(ele=>{
                        if(ele[0]==="uId" || ele[0]==="student")
                            return <div></div>
                        else if(ele[0]==="postJobDetails")
                        {
                            return(
                                <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
                                    <div>{ele[0]}</div>
                                    {
                                        ele[1].map((ci,index)=>{
                                            return(
                                            <div>
                                            <div>{index+1}</div>
                                            {
                                                Object.entries(ci).map(cii=>{
                                                    if(cii[0]==="perks" || cii[0]==="jobId")
                                                        return <div></div>
                                                    else  
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
        );
    }
}
export default Profile;