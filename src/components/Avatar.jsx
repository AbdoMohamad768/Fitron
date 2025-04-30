function Avatar({ width = "8" }) {
  return (
    <figure className="mr-3 sm:mr-2">
      <img
        className={`w-${width} rounded-full`}
        src="/default-user.jpg"
        alt=""
      />
    </figure>
  );
}

export default Avatar;
