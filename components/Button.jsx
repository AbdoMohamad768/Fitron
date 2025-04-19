function Button({ children }) {
  return (
    <button className="rounded-sm px-4 py-2 bg-main-700 text-2xl">
      {children}
    </button>
  );
}

export default Button;
