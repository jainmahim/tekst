import React, { useState } from "react";

export default function TextForm(props) {
  const change = (event) => {
    setText(event.target.value);
  };
  const upCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const loCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    setText("");
  };
  const reverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <div className="container"  >
      <div className="">
        <div className="my-5">
          <h2>{props.heading}</h2>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={change}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={upCase}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={loCase}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <div className="my-2 flex flex-row">

        <p>
     
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} characters{" "}
        </p>
        <p className="mnl-5">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          {" "} minutes read
        </p>
      </div>
        <hr></hr>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
  );
}
