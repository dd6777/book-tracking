import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as api from  "./book-api"
import AllBooks from './allBooks';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';
import Search from './search';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";




class App extends Component {
  state = {
    books : [],
    bgColors : ["bg-green","bg-orange","bg-blue","bg-purple","bg-skin","bg-yellow","bg-red","bg-sky"],
    past: [],
    present: [],
    future: []
    
  }


  

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
  
  api.update(book,"wantToRead");

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

  api.update(book,"currentlyReading");
  

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

  api.update(book,"read");
  

}

  render() {
    
    return (

      <div>
      <Route exact path="/"  render={()=> (
      <div className=" main-page "> 
          <div className="container-fluid padding-all bg-indigo">
            <div className="container d-flex justify-content-between ">
              <h3 className="white pacifico "><i className="fa fa-book"> </i> MY BOOKS </h3>
              <h4 className="white"><Link to="/search"> <i className="fa fa-search"></i> </Link></h4>
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

            {/* <AllBooks allBooks={this.state} /> */}
            
                    
          </div>



      </div>

     )} />

     <Route path='/search' render={() => (
          <Search/>
      )} />
     
     </div>
     


   
    );
  }
}

export default App;
