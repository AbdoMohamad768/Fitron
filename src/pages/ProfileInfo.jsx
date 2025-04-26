// src/pages/ProfileInfo.jsx
function ProfileInfo() {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Info Section */}
      <div className="w-full text-center">
        <div className="bg-[#E8F0E8] flex items-center mt-3 mb-5 gap-10 px-10 rounded-4xl shadow-md">
          {/* Profile Image */}
          <img
            src="/profile photo.png" // Reference the image from the public directory
            alt="Profile"
            className="w-[218px] h-[218px] rounded-full object-cover m-3"
          />
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[20px] font-bold text-main-700 mb-3 leading-tight">
              @Username
            </h2>
            <p className="text-[20px] text-main-700 mb-3 leading-tight">
              test@test.com
            </p>
            <p className="text-[20px] text-main-700 leading-tight">
              0123456789
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-5">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 bg-[#E8F0E8] mb-5 gap-2 px-8 py-5 rounded-4xl shadow-md text-left">
            <div className="flex items-center py-[12px] border-b border-[#E0F2E9]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                FIRST NAME:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                User
              </span>
            </div>

            <div className="flex items-center py-[12px] border-b border-[#E0F2E9]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                LAST NAME:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                name
              </span>
            </div>

            <div className="flex items-center py-[12px]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                BIRTHDAY:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                JAN 1 1970
              </span>
            </div>

            <div className="flex items-center py-[12px]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                REGION:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                EGYPT
              </span>
            </div>
          </div>

          {/* Column 2*/}
          <div className="flex flex-col flex-1 bg-[#E8F0E8] mb-5 gap-2 px-8 py-5 rounded-4xl shadow-md text-left">
            <div className="flex items-center py-[12px] border-b border-[#E0F2E9]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                GENDER:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                MALE
              </span>
            </div>

            <div className="flex items-center py-[12px] border-b border-[#E0F2E9]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                WEIGHT:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                70KG
              </span>
            </div>

            <div className="flex items-center py-[12px] border-b border-[#E0F2E9]">
              <span className="text-[14px] font-bold text-black uppercase w-40">
                HEIGHT:
              </span>
              <span className="text-[15px] text-main-700 font-semibold uppercase">
                1.8M
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;