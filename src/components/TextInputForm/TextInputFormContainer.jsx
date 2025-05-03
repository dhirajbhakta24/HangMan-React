// this is the container and its contains only logic
import { useState } from "react";

import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value , setValue] =useState("");
  const navigate = useNavigate(); //useNavigate is a hook that returns
  //a navigate function which helps to navigate to other page after checking 
  //some conditions its is similar to Link of react router dom but provide capability
  //to apply conditions
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("Form submitted" , value);
    if(value){
      navigate(`play`, {state :{wordSelected:value}})
    }
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
