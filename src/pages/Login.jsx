import LoginSignupButton from "../components/LoginSignupButton";
import LoginSignupInput from "../components/LoginSignupInput";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center gradient-1">
      <div className="signup-form">
        <div className="flex  items-center gap-2">
          <Logo width={"50"} height={"50"} />
          <span className="font-bold text-3xl">Fito</span>
        </div>
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

          <a className="text-green-400">Forgot passowrd</a>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
          </div>
          <LoginSignupButton type={"submit"}>Log In</LoginSignupButton>
        </form>

        <p className="mt-2  text-gray-600">
          Don't have an account?
          <a href="#" className="text-green-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
