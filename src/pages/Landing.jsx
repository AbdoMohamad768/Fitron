import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen gradient-2 pt-5 px-4 overflow-scroll md:overflow-hidden">
      <div className="m-auto max-w-6xl">
        <header className="flex justify-between items-center bg-grey-400 p-4 rounded-3xl">
          <div className="logo flex items-center space-x-2">
            <img src="./../public/icon.svg" alt="Icon" className="w-10" />
            <span className="text-white">Fitron</span>
          </div>
          <div className="btn">
            <NavLink
              to={"/signup"}
              className="bg-main-700 pt-2 pb-2 pr-4 pl-4 rounded-2xl text-white"
            >
              Sign in
            </NavLink>
          </div>
        </header>

        <main className="landsection flex flex-col md:flex-row gap-10 items-center justify-between mt-10">
          <div className="flex-1 text-balance text-center">
            <p className="text-3xl text-white font-light mb-2">
              Let’s crush those goals!
            </p>
            <p className="text-white text-2xl font-light mb-2">
              {" "}
              Welcome to Fito
            </p>
            <p className="text-main-850 text-2xl mb-2">
              where sweat meets success.
            </p>
            <p className="text-white font-light mb-6">
              Enter your details to Proceed further
            </p>
            <NavLink
              to={"/login"}
              className="bg-main-800 pr-15 pl-15 pt-1 pb-1 text-white rounded-2xl mt-2"
            >
              Continue →
            </NavLink>
          </div>

          <figure className="image flex-shrink-0">
            <img
              src="./../public/landing-page.png"
              alt="image"
              className="w-102 object-cover"
            />
          </figure>
        </main>
      </div>
    </div>
  );
}

export default Landing;
