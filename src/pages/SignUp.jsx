import LoginSignupInput from "../../components/LoginSignupInput";

function SignUp() {
  return (
    <main>
      <form className="signup-form">
        <div>{/* <Logo /> */}</div>
        <h1 className="text-center text-2xl font-extrabold text-grey-500 mb-4">
          Sign Up Your Accout
        </h1>

        <LoginSignupInput
          id={"username"}
          type={"text"}
          placeholder={"username"}
          label={"Username"}
          required={true}
        />

        <LoginSignupInput
          id={"email"}
          type={"email"}
          placeholder={"hello@example.com"}
          label={"Email"}
          required={true}
        />

        <LoginSignupInput
          id={"password"}
          type={"password"}
          placeholder={"Password"}
          label={"password"}
          required={true}
        />

        <LoginSignupInput
          id={"confirm-password"}
          type={"confirm-password"}
          placeholder={"Confirm Password"}
          label={"confirm-password"}
          required={true}
        />

        <button
          type="submit"
          className="bg-main-750 text-xl font-extrabold px-3 py-2 text-white rounded-xl w-full mt-4 mb-1"
        >
          Sign Up
        </button>
        <p className=" text-grey-500 font-semibold">
          Already have an account?{" "}
          <a href="/login" className="text-main-750">
            Login
          </a>
        </p>
      </form>
    </main>
  );
}

export default SignUp;
