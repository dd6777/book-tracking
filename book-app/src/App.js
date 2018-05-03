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


moveToFuture = (book) => {
  this.setState((currentBook) => ({
      books: currentBook.books.filter((e) => {
      
        return book.shelf = "wantToRead" 
 
      }),

      future: currentBook.books.filter((e) => {
        
       return e.shelf === book.shelf        
 
      }),

      present: currentBook.present.filter((e) => {
        
        return e.id !== book.id        
  
       }),

       past: currentBook.past.filter((e) => {
        
        return e.id !== book.id        
  
       })

      
  }))

}

moveToPresent = (book) => {
  this.setState((currentBook) => ({
      books: currentBook.books.filter((e) => {
      
        return book.shelf = "currentlyReading" 
 
      }),

      present: currentBook.books.filter((e) => {
        
       return e.shelf === book.shelf        
 
      }),

      past: currentBook.past.filter((e) => {
        
        return e.id !== book.id        
  
       }),

       future: currentBook.future.filter((e) => {
        
        return e.id !== book.id        
  
       })

      
  }))

}


moveToPast = (book) => {
  this.setState((currentBook) => ({
      books: currentBook.books.filter((e) => {
      
        return book.shelf = "read" 
 
      }),

      past: currentBook.books.filter((e) => {
        
       return e.shelf === book.shelf        
 
      }),

      present: currentBook.present.filter((e) => {
        
        return e.id !== book.id        
  
       }),

       future: currentBook.future.filter((e) => {
        
        return e.id !== book.id        
  
       })

      
  }))

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
            <CurrentlyReading 
            
              currentlyReading={this.state} 
              passFuture = {this.moveToFuture}
              passPast = {this.moveToPast}
              
            
            />
                        
            <WantToRead 
              wantToRead={this.state}
              passPresent = {this.moveToPresent}
              passPast = {this.moveToPast}

              />

            <Read 
            
              read={this.state}
              passPresent = {this.moveToPresent}
              passFuture = {this.moveToFuture}
              

            />

            <AllBooks allBooks={this.state} />
            
            
            
            
      
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
