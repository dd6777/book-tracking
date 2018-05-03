import React, { Component } from 'react';


class Read extends Component{

    
  render() {
    
    return (
        
        <div id="read">
                <h4 className="margin-10"> Read</h4>

                   <div className="row" id="books">
                        

                        {this.props.read.past.map((book,color) => (


                          <div className="col-sm-4 margin-15 " key={book.title} >
                            <div className={`col-xs-12 text-center relative book-container ${this.props.read.bgColors[(this.props.read.bgColors.length > color) ? color : 2 ]} `}  >
                              <div className="img">
                                <img src={book.imageLinks.thumbnail} alt={book.subtitle} className="" />
                              </div>
                              
                              <div className="book-desc">
                                <h6 className="text-center" >
                                  {book.title}
                                </h6>

                              </div>


                              <div className ="book-options row">
                                <div className = "col-6 button-1 padding-0">
                                    <button className="btn btn-black no-radius form-control" onClick = {() => this.props.passPresent(book)}>Move to Currently Reading</button> 
                                </div>

                                <div className = "col-6 button-2 padding-0">
                                    <button className="btn btn-black no-radius form-control" onClick = {() => this.props.passFuture(book)}>Move to Want To Read</button> 
                                </div>
                              </div>
                             
                            </div>
                          </div>
                          

                        ))}

                       
                  </div>  


            </div>

    )

  }



}

export default Read;
