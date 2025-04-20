import { NavLink, useNavigate } from "react-router";
import LoginSignupButton from "../components/LoginSignupButton";
import LoginSignupInput from "../components/LoginSignupInput";
import Logo from "../components/Logo";

function ConfirmEmail() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Logo width={"50"} height={"50"} />
        <span className="font-bold text-3xl">Fito</span>
      </div>
      <h2 className="text-center text-xl font-bold text-grey-500 mb-6">
        Confirm Your Email Address
      </h2>

      <div className="mb-12">
        <LoginSignupInput
          id={"username"}
          type={"text"}
          placeholder={"hello@example.com"}
          label={"Username or Email"}
          required={true}
        />
      </div>

      <LoginSignupButton onClick={() => navigate("/recovery/recovery-code")}>
        Continue
      </LoginSignupButton>

      <p className="mt-4  text-gray-600">
        Don&apos;t have an account?
        <NavLink to="/signup" className="text-green-500 hover:underline">
          {" "}
          Sign Up
        </NavLink>
      </p>
    </>
  );
}

export default ConfirmEmail;
