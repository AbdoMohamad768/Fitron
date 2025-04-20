function LoginSignupInput({ id, label, type, placeholder, required }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
}

export default LoginSignupInput;
