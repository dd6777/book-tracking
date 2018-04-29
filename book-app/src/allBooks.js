import React, { Component } from 'react';


class AllBooks extends Component{

    
  render() {
    
    return (
        
        <div id="AllBooks">
                <h4 className="margin-10"> All Books </h4>

                   <div className="row" id="books">
                        

                        {this.props.allBooks.books.map((book,color) => (
                          
                          
                       
                          <div className="col-sm-4 margin-15 " key={book.title} >
                            <div className={`col-xs-12 text-center relative book-container ${this.props.allBooks.bgColors[(this.props.allBooks.bgColors.length > color) ? color : 2 ]} `}  >
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

    )

  }



}

export default AllBooks;
