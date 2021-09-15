import { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const clearTextHandler = () => {
    setText("");
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          onChange={changeHandler}
          className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2f2e3b",
            color: props.mode === "light" ? "black" : "white"
          }}
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        onClick={upperCase}
        className="btn btn-primary me-1 my-1"
      >
        Convert to UpperCase
      </button>
      <button
        disabled={text.length === 0}
        onClick={lowerCase}
        className="btn btn-primary me-1 my-1"
      >
        Convert to LowerCase
      </button>
      <button
        disabled={text.length === 0}
        onClick={clearTextHandler}
        className="btn btn-primary me-1 my-1"
      >
        Clear Text
      </button>
      <p>Character counter: {text.length}</p>
      <p>
        word counter:{" "}
        {
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }
      </p>
      <h3>Preview</h3>
      <p>{text.length === 0 ? "Nothing to Preview" : text}</p>
    </div>
  );
}
