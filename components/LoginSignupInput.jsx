function LoginSignupInput({ id, label, type, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-grey-500 font-semibold">
        {label}
      </label>
      <div className="relative mb-3">
        <span className="absolute right-3 top-1/2 -translate-y-1/2"></span>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className="bg-white border w-full border-main-700 px-4 py-2 rounded-xl focus:outline-none placeholder:text-grey-300 placeholder:font-bold font-bold"
        />
      </div>
    </div>
  );
}

export default LoginSignupInput;
