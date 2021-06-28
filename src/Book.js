import React from 'react'


const Book = (props) => {
    const { img, title, author } = props;
  
  
    const clickHandler = () => {alert("hello user!")}
  
    const complexHandler = (author) => {
      // alert("hello from" + author);
      console.log("hello from "+ author);
  
    }
    return (
      <article className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>
          {author.toUpperCase()}
        </h4>
        <button type="button" onClick={clickHandler}>Some button</button>
        {/* will automaticly call the function  */}
        {/* <button type="button" onClick={complexHandler(author)}>Some button</button> */} 
        <button type="button" onClick={() => complexHandler(author)}>complex button</button>
  
      </article>
    );
  };
  

export default Book
