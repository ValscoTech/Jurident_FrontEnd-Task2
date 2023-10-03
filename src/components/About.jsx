import Video from "../assets/Video.png";
import supporter1 from "../assets/supporter1.png";
import supporter2 from "../assets/supporter2.png";
import supporter3 from "../assets/supporter3.png";
import supporter4 from "../assets/supporter4.png";
import supporter5 from "../assets/supporter5.png";
import supporter6 from "../assets/supporter6.png";
import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import ourJourney from "../assets/ourJourney.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.png";
import team8 from "../assets/team8.png";
import facebookLogo from "../assets/facebooklogo.png";
import twitterLogo from "../assets/twitterlogo.png";
import linkedinLogo from "../assets/linkedinlogo.png";
import arrow from '../assets/arrow.png';

const About = () => {
  return (
    <div className="h-auto">
      <div className="bg-[#E8EBF0] flex flex-col md:flex-row p-8 md:p-16">
        <div className="flex flex-col w-full md:w-3/5">
          <div className="flex items-center">
            <div className="h-0.5 mr-5 w-14 bg-[#096A56] rounded-lg"></div>
            <h1 className="font-nunito font-bold text-lg text-txtGreen">
              KNOW ABOUT US
            </h1>
          </div>
          <h1 className="text-5xl mt-9 font-nunito font-bold py-5 text-txtGreen">
            We are a non-governmental organization
          </h1>
        </div>
        <div className="w-full md:w-2/5 md:px-10">
          <p className="font-nunito font-bold py-5 text-md text-txtGreen">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <p className="font-nunito font-thin text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </div>
      <div className="flex justify-center py-5 custom-bg">
        <img src={Video} alt="video" className="w-4/5" />
      </div>
      <div className="flex flex-col md:flex-row p-8 md:p-16 md:mx-14">
        <div className="flex flex-col w-full md:w-1/2 md:p-10 md:pl-16">
          <h1 className="font-nunito font-bold text-lg text-txtGreen my-2">
            OUR MISSION
          </h1>
          <h1 className="font-nunito font-extrabold text-xl text-txtGreen">
            We make sure to provide inclusive care for children with special
            needs
          </h1>
          <p className="font-nunito text-gray-400 py-5 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:p-10 md:pr-16">
          <h1 className="font-nunito font-bold text-lg text-txtGreen my-2">
            OUR VISION
          </h1>
          <h1 className="font-nunito font-extrabold text-xl text-txtGreen">
            Provide more inclusive care to children around the world
          </h1>
          <p className="font-nunito text-gray-400 py-5 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-10 md:px-20 py-10 bg-bgGray">
        <h1 className="font-nunito font-extrabold text-2xl text-txtGreen">
          OUR SUPPORTERS
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <div className="flex flex-col md:flex-row justify-around">
          <img src={supporter1} className='my-5' alt="supporter" />
          <img src={supporter2} className='my-5' alt="supporter" />
          <img src={supporter3} className='my-5' alt="supporter" />
          <img src={supporter4} className='my-5' alt="supporter" />
          <img src={supporter5} className='my-5' alt="supporter" />
          <img src={supporter6} className='my-5' alt="supporter" />
        </div>
      </div>
      <div className="flex flex-col p-8 md:p-20">
        <h1 className="font-nunito font-extrabold mt-2 mb-14 text-4xl text-txtGreen text-center">
          Awards & Recognitions
        </h1>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={award1} alt="award1" className="w-[112px] h=[93px]" />
            <h1 className="font-nunito font-extrabold text-xl text-center mt-5 mb-3 text-txtGreen">
              2021
            </h1>
            <h1 className="font-nunito text-sm font-bold text-center">
              Best NGO Award
            </h1>
            <p className="font-nunito text-xs">BERLIN, GERMANY</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={award2} alt="award2" className="w-[112px] h=[93px]" />
            <h1 className="font-nunito font-extrabold text-xl text-center mt-5 mb-3 text-txtGreen">
              2018
            </h1>
            <h1 className="font-nunito text-sm font-bold text-center">
              Global Award
            </h1>
            <p className="font-nunito text-xs">NEW YORK, USA</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={award3} alt="award3" className="w-[112px] h=[93px]" />
            <h1 className="font-nunito font-extrabold text-xl text-center mt-5 mb-3 text-txtGreen">
              2014
            </h1>
            <h1 className="font-nunito text-sm font-bold text-center">
              CSN Award
            </h1>
            <p className="font-nunito text-xs">NEW DELHI INDIA</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={award4} alt="award4" className="w-[112px] h=[93px]" />
            <h1 className="font-nunito font-extrabold text-xl text-center mt-5 mb-3 text-txtGreen">
              2010
            </h1>
            <h1 className="font-nunito text-sm font-bold text-center">
              NGO of the year Award
            </h1>
            <p className="font-nunito text-xs">VIENNA, AUSTRIA</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#E8EBF0] p-5 md:p-20 justify-center">
        <div className="flex flex-col-reverse md:flex-row w-11/12 p-5 md:p-10 rounded-xl bg-white">
          <div className="flex flex-col w-full md:w-1/2 px-5 justify-center">
            <h1 className="font-nunito font-bold text-lg text-txtGreen my-2">
              OUR JOURNEY
            </h1>
            <h1 className="font-nunito font-extrabold my-4 text-4xl text-txtGreen">
              How we raised 34M
            </h1>
            <p className="font-nunito text-sm font-light text-gray-400 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh.
            </p>
            <div className="flex">
              <div className="flex flex-col mr-5">
                <h1 className="font-nunito font-extrabold mt-5 text-2xl text-txtGreen">
                  34M+
                </h1>
                <p className="font-nunito text-xs font-light pb-2">
                  Dontation Recieved
                </p>
              </div>
              <div className="flex flex-col mx-5">
                <h1 className="font-nunito font-extrabold mt-5 text-2xl text-txtGreen">
                  400+
                </h1>
                <p className="font-nunito text-xs font-light pb-2">
                  Volunteers
                </p>
              </div>
              <div className="flex flex-col mx-5">
                <h1 className="font-nunito font-extrabold mt-5 text-2xl text-txtGreen">
                  20+
                </h1>
                <p className="font-nunito text-xs font-light pb-2">
                  Care Homes
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={ourJourney} alt="journey" />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 md:p-20 items-center bg-[#E8EBF0]">
        <h1 className="font-nunito font-extrabold my-4 text-4xl text-txtGreen">
          Meet our team
        </h1>
        <p className="font-nunito text-sm text-gray-400 text-center w-9/12 md:w-5/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="flex flex-wrap md:p-10 justify-center">
          <div className="mb-10">
            <img src={team1} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Leonard John Davies
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Cofounder, CEO
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team2} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Francis Weber
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Vice Chairman
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team3} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Kyla Obrien
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Head of Authority
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team4} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Adrian Dixon
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Support Executive
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team5} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Freddy Busby
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Project Manager
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team6} alt="team" className="w-56 m-5" />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Dale Banks
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Accountant, Finance
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team7} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Miriam Middleton
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Cofounder, CEO
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
          <div className="mb-10">
            <img src={team8} alt="team" className="w-56 m-5 " />
            <h1 className="font-nunito text-md font-bold text-center text-txtGreen">
              Ellen Walton
            </h1>
            <p className="font-nunito my-2 text-xs text-center text-txtGreen">
              Vice Chairman
            </p>
            <div className="flex flex-around justify-center">
              <img
                src={facebookLogo}
                alt="facebook"
                className="w-4 mx-3 my-1"
              />
              <img src={twitterLogo} alt="twitter" className="w-4 mx-3 my-1" />
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-4 mx-3 my-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-5 md:px-20 md:pt-20 md:pb-0 bg-white justify-center">
        <div className="flex flex-col items-center justify-center md:m-10 md:py-10 px-3 md:px-20 bg-ctaBg bg-cover w-full h-60 md:h-80 rounded-3xl bg-no-repeat">
          <h1 className="font-nunito my-3 w-full md:w-4/6 text-xl md:text-4xl text-white text-center">
            You can contribute to provide a place for children with special
            needs!
          </h1>
          <div className="flex py-6">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#096A56] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Join as a volunteer
            </button>
            <button
              type="button"
              className="focus:outline-none bg-bgGray text-[#096A56] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center px-10 md:px-20 pt-10 bg-white">
        <h1 className="font-nunito font-extrabold text-2xl text-txtGreen">
          Our Events
        </h1>
        <div className="h-0.5 ml-10 mr-5 w-4/5 bg-[#096A56] rounded-lg"></div>
      </div>
      <div className="flex bg-white flex-col md:flex-row p-10 md:p-20">
        <div className="flex w-full md:w-1/2 md:mx-10 mb-5 md:mb-0 bg-bgGray h-36 items-center justify-around rounded-lg">
          <div className="flex flex-col">
            <h1 className="font-nunito text-3xl md:text-5xl text-gray-700">13</h1>
            <h1 className="font-nunito text-xs font-bold text-center text-gray-700">
              APR
            </h1>
          </div>
          <div className="flex flex-col w-4/6">
            <h1 className="font-nunito text-xs font-bold text-gray-700">
              NEXT EVENTS
            </h1>
            <h1 className="font-nunito text-sm md:text-xl font-bold  text-gray-700">
              A day with our wonderful children
            </h1>
          </div>
          <img src={arrow} alt='arrow' className="h-10 w-10 cursor-pointer"/>
        </div>
        <div className="flex w-full md:w-1/2 md:mx-10 mb-5 md:mb-0 bg-bgGray h-36 items-center justify-around rounded-lg">
          <div className="flex flex-col">
            <h1 className="font-nunito text-3xl md:text-5xl text-gray-700">25</h1>
            <h1 className="font-nunito text-xs text-center font-bold text-gray-700">
              APR
            </h1>
          </div>
          <div className="flex flex-col w-4/6">
            <h1 className="font-nunito text-xs font-bold text-gray-700">
              NEXT EVENTS
            </h1>
            <h1 className="font-nunito text-sm md:text-xl font-bold  text-gray-700">
            Seminar: Caring for children with autism
            </h1>
          </div>
          <img src={arrow} alt='arrow' className="h-10 w-10 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default About;
