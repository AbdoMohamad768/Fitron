import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PersonalCard = ({ name, icon, para, style }) => {
  return (
    <div className={`bg-white dark:bg-dark-main-750 rounded-xl p-4 flex items-center gap-4`}>
      <div className={`rounded-[50%] h-14 w-14 flex items-center justify-center transform transition-transform hover:scale-110 duration-300`} style={{ backgroundColor: style }}  >
        <div className="animate-bounce-subtle">
          <FontAwesomeIcon icon={icon} className="text-[30px] w-[100%] " />
        </div>
      </div>
      <div>
        <div className="w-full text-[15px]">
          <h3 className="font-[750]">{name}</h3>
          <p className="font-[400] text-[13px]">{para}</p>
        </div>
      </div>

    </div>
  )
}

export default PersonalCard