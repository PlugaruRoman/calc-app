import Button from "../atoms/Button";
import ClearButton from "../atoms/ClearButton";

const MainButtons = () => {
  let mainButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="buttons">
      <ClearButton />
      {mainButtons.map((el, index) => (
        <Button key={index} num={el} />
      ))}
    </div>
  );
};

export default MainButtons;
