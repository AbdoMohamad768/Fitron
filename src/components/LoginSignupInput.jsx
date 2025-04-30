function LoginSignupInput({
  id,
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  disabled = false,
}) {
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
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${
            disabled
              ? "cursor-not-allowed bg-grey-300"
              : "focus:ring-1 focus:ring-main-750"
          }`}
        />
      </div>
    </div>
  );
}

export default LoginSignupInput;
