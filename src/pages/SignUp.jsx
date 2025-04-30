import { NavLink } from "react-router";
import LoginSignupInput from "./../components/LoginSignupInput";
import LoginSignupButton from "../components/LoginSignupButton";
import LogoButton from "../components/LogoButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/slices/authSlice";

function SignUp() {
  const [firstName, setFirstName] = useState("user");
  const [lastName, setLastName] = useState("name");
  const [email, setEmail] = useState("user@name");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(signup({ email, password, firstName, lastName }));
  }

  return (
    <main className="h-screen flex items-center justify-center gradient-1">
      <form onSubmit={handleSubmit} className="signup-form">
        <LogoButton />

        <h1 className="text-center text-xl sm:text-2xl font-extrabold text-grey-500 mb-4">
          Sign Up Your Accout
        </h1>

        <div className="flex gap-4">
          <LoginSignupInput
            id="first-name"
            type="text"
            placeholder="First name"
            label="First name"
            required={true}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <LoginSignupInput
            id="last-name"
            type="text"
            placeholder="Last name"
            label="Last name"
            required={true}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <LoginSignupInput
          id="email"
          type="email"
          placeholder="hello@example.com"
          label="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LoginSignupInput
          id="password"
          type="password"
          placeholder="Password"
          label="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginSignupInput
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          required={true}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
