import { useNavigate } from "react-router";
import LoginSignupButton from "../components/LoginSignupButton";
import LoginSignupInput from "../components/LoginSignupInput";
import Logo from "../components/Logo";

function RecoveryCode() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/recovery/reset-password");
  };
  return (
    <>
      <div className="flex  items-center gap-2 mb-3">
        <Logo width={"50"} height={"50"} />
        <span className="font-bold text-3xl ">Fito</span>
      </div>
      <h2 className="text-center text-xl font-bold text-grey-500 mb-4 text-balance">
        We have sent a recovery code to your email
      </h2>
      <form>
        <div className="mb-4">
          <LoginSignupInput
            id={"code"}
            type={"number"}
            placeholder={"Enter Recovery code"}
            label={"Recovery Code"}
            required={true}
          />
        </div>
        <LoginSignupButton type={"submit"} onClick={handleClick}>
          Confirm
        </LoginSignupButton>
      </form>
    </>
  );
}

export default RecoveryCode;
