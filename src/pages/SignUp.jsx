import { NavLink } from "react-router";
import LoginSignupInput from "./../components/LoginSignupInput";
import LoginSignupButton from "../components/LoginSignupButton";
import LogoButton from "../components/LogoButton";

function SignUp() {
  return (
    <main>
      <form className="signup-form">
        <LogoButton />

        <h1 className="text-center text-2xl font-extrabold text-grey-500 mb-4">
          Sign Up Your Accout
        </h1>

        <LoginSignupInput
          id="username"
          type="text"
          placeholder="username"
          label="Username"
          required={true}
        />

        <LoginSignupInput
          id="email"
          type="email"
          placeholder="hello@example.com"
          label="Email"
          required={true}
        />

        <LoginSignupInput
          id="password"
          type="password"
          placeholder="Password"
          label="password"
          required={true}
        />

        <LoginSignupInput
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          required={true}
        />

        <LoginSignupButton type={"submit"}>Sign Up</LoginSignupButton>
        <p className=" mt-2  text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-main-750">
            Login
          </NavLink>
        </p>
      </form>
    </main>
  );
}

export default SignUp;
