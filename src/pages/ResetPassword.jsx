import { NavLink } from "react-router";
import Logo from "../components/Logo";
import LoginSignupInput from "../components/LoginSignupInput";
import LoginSignupButton from "../components/LoginSignupButton";

function ResetPassword() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Logo width={"50"} height={"50"} />
        <span className="font-bold text-3xl">Fito</span>
      </div>
      <h2 className="text-center text-xl font-bold text-grey-500 mb-6">
        Reset your password
      </h2>

      <div className="mb-4">
        <LoginSignupInput
          id="password"
          type="password"
          placeholder="Password"
          label="Password"
          required={true}
        />
      </div>

      <div className="mb-8">
        <LoginSignupInput
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          required={true}
        />
      </div>

      <LoginSignupButton>Change</LoginSignupButton>

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

export default ResetPassword;
