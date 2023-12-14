import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return { backgroundColor: snap.color, color: "#FFF" };
    }
  };

  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
