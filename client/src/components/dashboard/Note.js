import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.about}</h1>
      <p>{props.description} </p>
      <p>
        <b>
          {"Author: "}
          {props.author}
          {"    "}
          {"Date: "}
          {props.date}
          {"    "}
          {"category: "}
          {props.category}
          {"    "}
        </b>
      </p>
    </div>
  );
}

export default Note;
