import React, { Component } from 'react';


class CurrentlyReading extends Component{

    
  render() {
    
    return (
        
        <div id="currentlyReading">
                <h4 className="margin-10"> Currently Reading </h4>

                   <div className="row" id="books">
                        

                        {this.props.currentlyReading.books.map((book,color) => (


                          <div className="col-sm-4 margin-15 " key={book.title} >
                            <div className={`col-xs-12 text-center relative book-container ${this.props.currentlyReading.bgColors[(this.props.currentlyReading.bgColors.length > color) ? color : 2 ]} `}  >
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

export default CurrentlyReading;
