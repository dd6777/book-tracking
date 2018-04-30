import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as api from  "./book-api"
import AllBooks from './allBooks';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';




class App extends Component {
  state = {
    books : [],
    bgColors : ["bg-green","bg-orange","bg-blue","bg-purple","bg-skin","bg-yellow","bg-red","bg-sky"],
    past: [],
    present: [],
    future: []
    
  }

  contact = [{ name : "devil"}];
  

  componentDidMount(){
    api.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))

      var current =  this.state.books.filter(e => (e.shelf === "currentlyReading"));

      this.setState(() => ({
        present: current
      }))

      var newBook =  this.state.books.filter(e => (e.shelf === "wantToRead"));

      this.setState(() => ({
        future: newBook
      }))

      var old =  this.state.books.filter(e => (e.shelf === "read"));

      this.setState(() => ({
        past: old
      }))

      console.log(books);
      console.log(current);
      console.log(newBook);
      console.log(old);
      
      
    });

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
            <AllBooks allBooks={this.state} />
            
            <CurrentlyReading currentlyReading={this.state} />
            <WantToRead wantToRead={this.state} />
            <Read read={this.state} />
            
            
            
      
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
