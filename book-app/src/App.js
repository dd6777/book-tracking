import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as api from  "./book-api"
 



class App extends Component {
  state = {
    books : [],
    bgColors : ["bg-green","bg-orange","bg-blue","bg-purple","bg-skin","bg-yellow","bg-red","bg-sky"]
    
  }


  

  componentDidMount(){
    api.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))

      console.log(books);

    })

  }




  render() {
    
    return (
      <div className=" main-page "> 
          <div className="container-fluid padding-all bg-indigo">
            <div className="container">
              <h3 className="white pacifico"><i className="fa fa-book"> </i> My Books </h3>
              
            </div>
          </div>
          
          <div className="container">
            <div id="currentlyReading">
                <h4 className="margin-10"> Currently Reading </h4>

                   <div className="row" id="books">
                        

                        {this.state.books.map((book,color) => (
                          
                          
                       
                          <div className="col-sm-4 margin-15 " key={book.title} >
                            <div className={`col-xs-12 text-center relative book-container ${this.state.bgColors[(this.state.bgColors.length > color) ? color : 2 ]} `}  >
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

            
            <div id="wantToRead">

            </div>

            
            <div id="Read">

            </div>
          </div>



      </div>


    );
  }
}

export default App;
