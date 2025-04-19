import "./App.css";

function App() {
  return (
    <div className="landing">
      <div className="navBar flex justify-between items-center bg-grey-800 m-7 p-4 rounded-3xl">
        <div className="logo flex items-center space-x-2">
          <img src="/Images/icon.svg" alt="Icon" className="w-10"/>
          <span className="text-white">Fitron</span>
        </div>
        <div className="btn">
          <button className="bg-main-700 pt-2 pb-2 pr-4 pl-4 rounded-2xl text-white">Sign in</button>
        </div>
      </div>
      <div className="landsection flex justify-evenly items-center ">
        <div className="text">
          <p className="text-3xl text-white font-light">Let’s crush those goals!</p>
          <p className="text-white pl-15 pt-2 text-2xl font-light"> Welcome to Fito</p>
          <p className="text-green-300 text-2xl ">where sweat meets success.</p>
          <p className="text-white pl-10 pt-1 font-light">Enter your details to Proceed further</p>
          <button className="bg-green-200 pr-15 pl-15 pt-1 pb-1 text-white rounded-2xl ml-10 mt-1">Continue → </button>
        </div>
        <div className="image">
          <img src="/Images/img1.png" alt="image" className="w-70" />
        </div>
      </div>
     
    </div>
  );
}

export default App;
