import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from "./App";

class Search extends Component{

    state = {
        query: ""
    }

    updateSearch = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    

    }

    render(){

        const { query } = this.state;
        const { books } = this.props.searchComp;
        
        const filteredBooks = query === "" ? books : books.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()));
        return(    
            
            <div className=" main-page "> 
                <div className="container-fluid padding-all bg-indigo">
                    <div className="container d-flex justify-content-left ">
                    <h4 className="white"><Link to="/"> <i className="fa fa-arrow-left"></i> </Link></h4>
                    
                    {/* <h3 className="white pacifico ">SEARCH BOOKS</h3> */}

                    <input className="search-bar" placeholder="Search Books" value={query} onChange={(e) => this.updateSearch(e.target.value)} />

                    </div>
                </div>
                
                <div className="container">
                    <div className="row" id="books">
                        

                        {filteredBooks.map((book,color) => (
                          
                          
                       
                          <div className="col-sm-4 margin-15 " key={book.title} >
                            <div className={`col-xs-12 text-center relative book-container ${this.props.searchComp.bgColors[(this.props.searchComp.bgColors.length > color) ? color : 2 ]} `}  >
                              <div className="img">
                                <img src={book.imageLinks.thumbnail} alt={book.subtitle} className="" />
                              </div>
                              
                              <div className="book-desc">
                                <h6 className="text-center" >
                                  {book.title}
                                </h6>

                              </div>
                             
                            </div>
                          </div>
                          

                        ))}

                       
                    </div>  
                    

                </div>

            </div>
        



        )

    }
}


export default Search;