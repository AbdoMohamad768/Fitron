import { useNavigate } from "react-router";
import Logo from "./Logo";

function LogoButton({ size = "lg", extraClasses = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`flex items-center gap-2 cursor-pointer ${extraClasses}`}
    >
      <Logo width={size === "lg" ? "50" : size === "md" ? "40" : "30"} />
      <span
        className={`${
          size === "lg"
            ? "font-bold text-3xl"
            : size === "md"
            ? "font-normall text-xl"
            : "font- text-lg"
        } sm:hidden md:block`}
      >
        Fitron
      </span>
    </button>
  );
}

export default LogoButton;
