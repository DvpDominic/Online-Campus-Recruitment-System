import React, { Component } from "react";

class MyApps extends Component{
    render(){
        let c=this.props.companies;
        return(

            <div>
            <div className="f1 header container row col-md-3">My Applications
	              </div>
            <div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc content-box'>
                {
                    c.map((i,index)=>{
                        return <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc' key={i.uId}>
                            <div>{index+1}</div>
                            <div>contact no: {i.contactNumber}</div>
                            <div>Name: {i.name}</div>
                            <div>Email: {i.email}</div>
                            {
                                // eslint-disable-next-line
                                Object.entries(i.postjobdetails).map(ele=>{
                                    if(ele[0]!=="perks" && ele[0]!=="jobId")
                                        {return <div key={ele[0]}>{ele[0]} : {ele[1]}</div>}
                                })
                            }
                        </div>
                    })
                }
            </div>
            </div>
        );
    }
}
export default MyApps;