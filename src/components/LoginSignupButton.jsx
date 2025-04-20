function LoginSignupButton({ children, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-main-750 w-full  text-white p-3 rounded-lg hover:bg-green-600 transition cursor-pointer font-bold text-2xl"
    >
      {children}
    </button>
  );
}

export default LoginSignupButton;
