// this is the container and its contains only logic
import { useState } from "react";

import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value , setValue] =useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("Form submitted" , value);
  }

  function handleTextInputChange(event) {
    console.log("Text input changed");

    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked");

    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }

    console.log(inputType);
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
