import Button from "../atoms/Button";
import ClearButton from "../atoms/ClearButton";

function MainButtons() {
  const mainButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="buttons">
      <ClearButton />
      {mainButtons.map((el) => (
        <Button key={el} num={el} />
      ))}
    </div>
  );
}

export default MainButtons;
