import { NavLink } from "react-router";
import LoginSignupButton from "../components/LoginSignupButton";
import LoginSignupInput from "../components/LoginSignupInput";
import LogoButton from "../components/LogoButton";

const Login = () => {
  return (
    <main className="h-screen flex items-center justify-center gradient-1">
      <div className="login-form">
        <LogoButton />

        <h2 className="text-center text-2xl font-extrabold text-grey-500 mb-4">
          Log In Your Account
        </h2>

        <form>
          <div className="mb-4">
            <LoginSignupInput
              id={"username"}
              type={"text"}
              placeholder={"hello@example.com"}
              label={"Username or Email"}
              required={true}
            />
          </div>

          <div className="mb-3">
            <LoginSignupInput
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              label={"password"}
              required={true}
            />
          </div>

          <NavLink to="/recovery" className="text-green-400">
            Forgot passowrd
          </NavLink>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
          </div>
          <LoginSignupButton type={"submit"}>Log In</LoginSignupButton>
        </form>

        <p className="mt-4  text-gray-600">
          Don&apos;t have an account?
          <NavLink to="/signup" className="text-green-500 hover:underline">
            {" "}
            Sign Up
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default Login;
