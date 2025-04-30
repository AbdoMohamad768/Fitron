function LoginSignupButton({ children, type, onClick, disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` w-full text-white p-3 rounded-lg transition font-bold text-2xl ${
        disabled
          ? "cursor-not-allowed bg-main-300"
          : "cursor-pointer bg-main-750 hover:bg-green-600"
      }`}
    >
      {children}
    </button>
  );
}

export default LoginSignupButton;
