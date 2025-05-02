import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProfiledDetails() {
  const [imageSrc, setImageSrc] = useState("/profile photo.png");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const { user, status } = useSelector((state) => state.user);
  useEffect(() => {
    if ((status === "success" || status === "signed-up") && user) {
      setBirthday(user.birthday || "");
      setFirstName(user.first_name || "");
      setGender(user.gender || "");
      setHeight(user.height || "");
      setLastName(user.last_name || "");
      setWeight(user.weight || "");
    }
  }, [status, user]);

  return (
    <div className="bg-[#E8F0E8] w-full justify-center h-full flex flex-col sm:flex-row items-center mt-3 mb-5 gap-6 sm:gap-20 px-6 sm:px-10 py-4 rounded-3xl shadow-md">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="aspect-square w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] shrink-0">
          <img
            src={imageSrc}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <label htmlFor="image-upload" className="flex gap-1 cursor-pointer">
          <h3 className="font-semibold text-black-icon-500">Upload</h3>
          <img src="/public/Upload.svg" alt="" className="w-7" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <form className="w-full sm:flex-1">
        <div className="flex flex-col mb-5">
          <div className=" mb-1">
            <label className="font-semibold text-base sm:text-lg md:text-xl">
              Full Name
            </label>
          </div>
          <div className="flex gap-4 justify-center">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="bg-white-900 w-1/2 rounded-md p-2 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="bg-white-900 w-1/2 rounded-md p-2 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label className="font-semibold text-base sm:text-lg md:text-xl">
            Birthdate
          </label>
          <input
            type="date"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="bg-white-900 p-2 rounded-md text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
          />
        </div>

        <div className="flex gap-4 justify-center mb-5">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold text-base sm:text-lg md:text-xl mb-1">
              Weight(Kg)
            </label>
            <input
              type="text"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className="bg-white-900 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-main-750 "
            />
          </div>

          <div className="flex flex-col justify-center w-1/2 ">
            <label className="font-semibold text-base sm:text-lg md:text-xl mb-1 ">
              Height(m)
            </label>
            <input
              type="text"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="1.75"
              className="bg-white-900 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-main-750"
            />
          </div>
        </div>

        <div className="mb-5">
          <h2 className="font-semibold text-base sm:text-lg md:text-xl">
            Gender
          </h2>
          <select
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-1/1 p-2 bg-white-900 rounded-md text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button
          // onClick={handleSubmit}
          className="bg-main-700 pt-2 pb-2 pr-4  md:w-1/6 pl-4  sm:w-full rounded-2xl text-white cursor-pointer hover:bg-[#73bc31]  trasition duration-200"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfiledDetails;
