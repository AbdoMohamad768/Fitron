import DashLinear from "../components/dashLinear";
import PersonalCard from "../components/personalCard";
import {faDumbbell , faFireFlameCurved , faMoon ,faClock , faPersonRunning , faPersonBiking , faPersonPraying} from "@fortawesome/free-solid-svg-icons"
import Progress from "../components/Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EachProgress from "../components/eachProgress";
import { IconMID, RunningIcon, YogaIcon } from "../components/ActivityIcons.jsx";
import CaloriesChart from "../components/CaloriesChart.jsx";
function Dashboard() {
  return (
    <>
      <main>
        <div className="container">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 cursor-pointer">
                    <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <PersonalCard name='42%' icon={faDumbbell} para='Weekly Progress' style ="#ff285c"  />
                    </div>
                    <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <PersonalCard name='67col' icon={faFireFlameCurved} para='Cardio Burn' style ="#1ea7c5"/>
                    </div>
                    <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <PersonalCard name='8 Hours' icon={faMoon} para='Total Duration Burning' style ="#ff9432"/>
                    </div>
                    <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <PersonalCard name='8 Days' icon={faClock} para='Continues Days' style ="#c046d3"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 cursor-pointer">
                  <div className="h-[100%] pt-[40px] w-full">
                      <div className="pb-[20px] flex justify-between">
                        <div className="">
                        <p className="text-[22]">Workout Static</p>
                        </div>
                        <div className=" flex align-center gap-10 md:gap-5 ">
                            <div className="flex gap-[5px] text-blue">
                              <div>
                              <FontAwesomeIcon icon={faPersonRunning}/>
                              </div>
                              <div className="text-[13px]">
                              <p>45%</p>
                              <p>Running</p>
                              </div>
                            </div>
                            <div className="flex gap-[5px] text-orange">
                              <div>
                              <FontAwesomeIcon icon={faPersonBiking}/>
                              </div>
                              <div className="text-[13px]">
                              <p>27%</p>
                                <p>cycling</p>
                              </div>
                            </div>
                            <div className="flex gap-[5px] text-yoga">
                              <div>
                              <FontAwesomeIcon icon={faPersonPraying}/>
                              </div>
                              <div className="text-[13px]">
                              <p>86%</p>
                              <p>Yoga</p>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="w-full h-full">
                      <DashLinear/>
                      </div>
                  </div>
                  <div className=" h-full">
                   <Progress/>
                  </div>



                </div>
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pt-[60px] cursor-pointer">
                <EachProgress
                    icon={<RunningIcon/>} 
                    title="Running" 
                    percentage={45} 
                    color="#FF9D4D" 
                    subtitle="45km/100km"
                    animationClass="animate-slide-up-1"
                    />
                    <EachProgress 
                       icon={<IconMID/>} 
                       title="Cycling" 
                       percentage={66} 
                       color="#22B8CF" 
                       subtitle="65km/20km"
                       animationClass="animate-slide-up-2"/>
                      <EachProgress 
                     icon={<YogaIcon/>} 
                     title="Yoga" 
                     percentage={78} 
                     color="#B27CFF" 
                     subtitle="56min/1hr"
                     animationClass="animate-slide-up-3"
                    />

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 cursor-pointer">
                <CaloriesChart/>
                </div>
                
            </div>

        </div>

      </main>
    </>
  );
}

export default Dashboard;
