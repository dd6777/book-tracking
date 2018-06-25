import React, { Component } from 'react';


class CurrentlyReading extends Component{

    
  render() {
  
    console.log(this.props.currentlyReading);

    return (
        
        <div id="currentlyReading">
                <h4 className="margin-10"> Currently Reading </h4>

                   <div className="row" id="books">
                        

                        {this.props.currentlyReading.present.map((book,color) => (

                          

                          <div className="col-sm-4 margin-15 " key = {book.id}>
                            <div className={`text-center relative book-container ${this.props.currentlyReading.bgColors[(this.props.currentlyReading.bgColors.length > color) ? color : 2 /*don't know syntax to write color val to 0 */ ]} `}  >
                              <div className="img">
                                <img src={book.imageLinks.thumbnail} alt={book.subtitle} className="" />
                              </div>

                              {/* <div className="black-overlay"></div> */}
                              
                              <div className="book-desc">
                                <h6 className="text-center" >
                                  {book.title}
                                </h6>

                              </div>

                              <div className ="book-options row">
                                <div className = "col-6 button-1 padding-0">
                                    <button className="btn btn-black no-radius form-control" onClick = {() => this.props.passPast(book)}>Move to Read</button> 
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

export default CurrentlyReading;
