import React from "react";

import ReactDOM from "react-dom";

// css
import "./index.css";
import {data} from "./books"
import Book from "./Book"

// const Greeting = () => {
//     return React.createElement('h1',{},"from a arrow function")
// }


function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>; // using spread operator

      })}
    </section>
  ); 
}

ReactDOM.render(<BookList />, document.getElementById("root"));
