import getButtonStyling from "./getButtonStyling";

function Button({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) {
  return (
    <button
      onClick={onClickHandler}
      type={type} // default type button , could also be submit 
      className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
    >
      {text}
    </button>
  );
}
export default Button;
