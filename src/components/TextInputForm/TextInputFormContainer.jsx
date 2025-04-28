// this is the container and its contains only logic 
import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
    const [inputType , setInputType] = useState("password");

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted");
    }

    function handleTextInputChange(event){
        console.log("Text Input Change");
        console.log(event.target.value);
    }
    function handleShowHideClick(){
        console.log("show/hide button clicked");
        if(inputType === "password"){
            setInputType("text");
        }
        else{
            setInputType("password");
        }
        console.log(inputType);
    }

    return(
    <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />

    );


}
export default TextInputFormContainer;