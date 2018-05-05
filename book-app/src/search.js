import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Search extends Component{

    render(){

        return(    
            
            <div className=" main-page "> 
                <div className="container-fluid padding-all bg-indigo">
                    <div className="container d-flex justify-content-left ">
                    <h4 className="white"><Link to="/"> <i className="fa fa-arrow-left"></i> </Link></h4>
                    
                    <h3 className="white pacifico ">SEARCH </h3>
                    </div>
                </div>
                
                <div className="container">
                    

                </div>

            </div>
        



        )

    }
}


export default Search;