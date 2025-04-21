import { useNavigate } from "react-router";
import Logo from "./Logo";

function LogoButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Logo width={"50"} height={"50"} />
      <span className="font-bold text-3xl">Fitron</span>
    </button>
  );
}

export default LogoButton;
