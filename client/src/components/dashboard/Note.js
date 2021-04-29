import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.Article_Title}</h1>
      <p>{props.description} </p>
      <p>
        <b>
          {"Author: "}
          {props.author}
          {"    "}
          {"Date: "}
          {props.date}
          {"    "}
          {"Topic: "}
          {props.category}
          {"    "}
        </b>
      </p>
    </div>
  );
}

export default Note;
