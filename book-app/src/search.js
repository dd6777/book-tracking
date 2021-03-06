import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Search extends Component{

    state = {
        query: ""
    }

    updateSearch = (query) => {
        this.setState(() => ({
            query: query
        }))
    

    }

    render(){

        const { query } = this.state;
        const { books } = this.props.searchComp;
        
        const filteredBooks = query === "" ? [] : books.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()));
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

                              <div className ="book-heading row">
                                <div className = "col-12 button-1 padding-0">
                                    <h6 className="text-center">
                                    
                                       {( book.shelf === "wantToRead")? "Want To Read" : ""}
                                       {( book.shelf === "read")? "Read" : ""}                                         
                                       {( book.shelf === "currentlyReading")? "Currently Reading" : ""}                                         
                                                                                                                        
                                    </h6>
                                </div>

                               
                              </div>

                            </div>

                            <div className ="book-Soptions row">
                               

                                <select className="form-control selValue" id={book.id} onChange={() => this.props.afterChange(book)} >
                                    <option value="None">None</option>
                                    <option value="currentlyReading">Move To Currently Reading</option>
                                    <option value="wantToRead">Move To Want To Read</option>
                                    <option value="read">Move To Read</option>

                                </select>

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