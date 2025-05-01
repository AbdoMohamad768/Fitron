import { NavLink, useNavigate } from "react-router";
import LoginSignupButton from "../components/LoginSignupButton";
import LoginSignupInput from "../components/LoginSignupInput";
import LogoButton from "../components/LogoButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.status);

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login({ email, password }));
  }

  useEffect(
    function () {
      if (loginStatus === "success") {
        navigate("/app/dashboard");
      }
    },
    [loginStatus, navigate]
  );

  return (
    <div className="h-screen flex items-center justify-center gradient-1">
      <main className="login-form">
        <LogoButton />

        <h2 className="text-center text-2xl font-extrabold text-grey-500 mb-4">
          Log In Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <LoginSignupInput
              disabled={loginStatus === "loading"}
              id={"username"}
              type={"text"}
              placeholder={"hello@example.com"}
              label={"Username or Email"}
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <LoginSignupInput
              disabled={loginStatus === "loading"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              label={"password"}
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <LoginSignupButton
            disabled={loginStatus === "loading"}
            type={"submit"}
          >
            Log In
          </LoginSignupButton>
        </form>

        <p className="mt-4 text-gray-600">
          Don&apos;t have an account?
          <NavLink to="/signup" className="text-green-500 hover:underline">
            {" "}
            Sign Up
          </NavLink>
        </p>
      </main>
    </div>
  );
};

export default Login;
