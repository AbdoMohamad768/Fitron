function LoginSignupButton({ children, type ,onClick}) {
  return (
    <button
    onClick={onClick}
      type={type}
      className="bg-main-750 w-full  text-white p-3 rounded-lg hover:bg-green-600 transition cursor-pointer font-bold text-2xl"
    >
      {children}
    </button>
  );
}

export default LoginSignupButton;
