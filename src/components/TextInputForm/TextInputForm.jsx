//here how our component will look is defined , logic is implemented
//in other container file which contain only logic
// this type of segregation helps to follow the important rule in coding world
// SRP -Single responsibility principle:
//SRP is clean code management technique which defines that each file
//should handle only one task or logic other things must be implemented
//

import Button from "../Button/Button";

import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Enter a word or a phrase"
          placeholder="Enter a word or phrase here ..."
          onChangeHandler={handleTextInputChange}
        />
      </div>

      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          onClickHandler={handleShowHideClick}
        />
      </div>

      <div>
        <Button type="submit" styleType="primary" text="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
