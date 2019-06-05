import React, { Component } from "react";
import '../Student.css';
class Dashboard extends Component{
    render(){
        let c=this.props.allcompanies;
        return(
            <div>
            <div className="f1 header container row col-md-3">DashBoard
	              </div>

            <div className='dib br3 pa3 ma2  bw2 shadow-5 tc content-box-large-dash-2'>
                {
                   Object.entries(c).map((cc,ii)=>{
                       return(
                           <div className='content-box-header'>
                           <div>{ii+1}</div>
                                {
                                    Object.entries(cc[1]).map((ccc)=>{
                                        if(ccc[0]==="postJobDetails")
                                        {
                                            return(
                                                <div className='content-box-large-dash box-with-header '>
                                                {
                                                    ccc[1].map((cccc,iiii)=>{
                                                        return(
                                                            <div className='bg-light-blue dib br3 pa3 ma2  bw2 shadow-5 tc'>
                                                                <div>{iiii+1}</div>
                                                                {
                                                                    Object.entries(cccc).map((ccccc)=>{
                                                                        if(ccccc[0]==="perks")
                                                                            return <div></div>
                                                                        else
                                                                            return <div className=' row col-md-2'>{ccccc[0]} : {ccccc[1]}</div>
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            )  
                                            }
                                        else if(ccc[0]==="uId" || ccc[0]==="student")
                                            return <div></div>
                                        else
                                            return  <div>{ccc[0]} : {ccc[1]}</div>
                                    })
                                }
                           </div>
                       )
                   })
                }
            </div>
            </div>
        );
    }
}
export default Dashboard;