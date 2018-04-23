import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as api from  "./book-api"
 



class App extends Component {
  state = {
    books : []
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

                   <div className="row">
                    
                        {this.state.books.map((book) => (

                          <div className="col-sm-5ths" key={book.title}>
                          <img src={book.imageLinks.thumbnail} alt={book.subtitle} className="full-width" />
                            <h6 className="text-center" >
                              {book.title}
                            </h6>
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
