import FuncButton from "../atoms/FuncButton";

function FuncButtons() {
  const funcButtons = ["/", "*", "+", "-", "="];

  return (
    <div className="buttons">
      {funcButtons.map((el) => (
        <FuncButton key={el} num={el} />
      ))}
    </div>
  );
}

export default FuncButtons;
