import FuncButton from "../atoms/FuncButton";

const FuncButtons = () => {
  let funcButtons = ["/", "*", "+", "-", "="];

  return (
    <div className="buttons">
      {funcButtons.map((el, index) => (
        <FuncButton key={index} num={el} />
      ))}
    </div>
  );
};

export default FuncButtons;
