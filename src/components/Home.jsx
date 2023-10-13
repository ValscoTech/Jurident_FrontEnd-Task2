import bgimg from "../assets/bgimg.jpg"; // Import the image
import BG from "../assets/BG.png";
import "./home.css";
import "./WhatWeDo.css";
import logo from "../assets/Logo.svg";
import logo1 from "../assets/Logo (1).svg";
import logo2 from "../assets/Logo (2).svg";
import logo3 from "../assets/Logo (3).svg";
import logo4 from "../assets/Logo (4).svg";
import logo5 from "../assets/Logo (5).svg";
import icon from "../assets/Icon.svg";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import servicesImg from "../assets/services-img.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${bgimg})`, // Set the background image
  };

  return (
    <>
      <div className="headerbg" style={divStyle}>
        <div className="header">
          <div>
            <h1>
              Together, we strive to work towards a sustainable and equitable
              future for all.
            </h1>
          </div>

          <div className="part">
            <div>
              <Link to="/whatwedo">
                <button> What we do </button>
              </Link>
            </div>
            {/* <div className="video">
              <img src={playIcon} />
              <div className="text-white">Play Video</div>
            </div> */}
          </div>
          <div className="part2">
            <p>230 children under our care</p>
            <div className="line2"></div>
            <p>58 donations collected</p>
          </div>
        </div>
      </div>

      <div className="header2-main">
        <div className="header2">
          <div>
            <div className="part3">
              <div className="line4"> </div>
              <h3>KNOW ABOUT US</h3>
            </div>
          </div>

          <div className="part4">
            <h1>
              We aim to provide the youth of the nation a safe, nurturing, and
              inclusive environment
            </h1>
            <p>
              Through innovative initiatives that prioritise awareness,
              education, and upliftment of the people who are less privileged,
              the Association and its members aim to provide the youth of the
              nation a safe, nurturing, and inclusive environment which enables
              them to become confident contributors to their communities and
              agents of positive change.
            </p>
          </div>
          <Link to="/about">
            <div className="btn-m2 ml-8 mt-5">
              <button className="btn focus:outline-none text-white bg-[#096A56] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 ">
                Learn more
              </button>
            </div>
          </Link>
        </div>
        <div>
          <img className="bg" src={BG} alt="" />
        </div>
      </div>

      <div className="supporter">
        <div>
          <h1>our Supporters</h1>
        </div>
        <div className="supporter-icon">
          <img alt="" src={logo} />
          <img alt="" src={logo1} />
          <img alt="" src={logo2} />
          <img alt="" src={logo3} />
          <img alt="" src={logo4} />
          <img alt="" src={logo5} />
        </div>
      </div>

      <div className="services-main">
        <div className="services">
          <div className="part3">
            <div className="line4"> </div>
            <h3 className="h3">WHAT WE DO</h3>
          </div>
          <div>
            <h1>
              Some services we <br /> provide for our girls
            </h1>
          </div>
          <div>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in <br /> eros elementum tristique.
            </p>
          </div>
          <div className="advocacy1">
            <div className="adv">
              <img src={icon} alt="" />
              <div>
                <h2>Advocacy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                  elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="adv">
              <img src={icon1} alt="" />
              <div>
                <h2>Health benefits</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                  elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="adv">
              <img src={icon2} alt="" />
              <div>
                <h2>Scholarships</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                  elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="adv">
              <img src={icon3} alt="" />
              <div>
                <h2>Sustainable livelihoods</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                  elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="serviceImg">
          <img className="serviceImg" src={servicesImg} alt="" />
        </div>
      </div>
      <div className="container md:px-20 md:pt-20 md:pb-10 p-10">
        <div className="line mt-4"></div>
        <div className="heading md:text-2xl font-bold text-[#22495F] text-lg mt-4">
          PROJECTS WE HAVE DONE
        </div>{" "}
        <br />
      </div>
      <h1 className="headthree text-xl font-semibold text-[#22495F] px-10 md:px-0 md:ml-24 mb-8 md:text-4xl -ml:24">
        We are all about creating a place where girls can thrive
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 md:h-[300px] md:mr-20 md:mx-20 mx-5 my-10 gap-6 h-auto text-white">
        <div className="px-4 py-4 md:py-8 bg-[url('./project1.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
          <div className="text">
            <h3 className="text-2xl font-medium mb-4 md:mb-6 font-nunito">
              Green India
            </h3>
            <p className="font-nunito">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis est soluta eum? Veniam, ex et!
            </p>
          </div>
          <div className="mt-5 self-start text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
            <button className="learn-more">Learn more</button>
          </div>
        </div>

        <div className="px-4 py-4 md:py-8 bg-[url('/project2.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
          <div className="text">
            <h3 className="text-2xl font-medium mb-4 md:mb-6 font-nunito">Happy School</h3>
            <p className="font-nunito">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis est soluta eum? Veniam, ex et!
            </p>
          </div>
          <div className="mt-5 self-start text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
            <button className="learn-more font-nunito">Learn more</button>
          </div>
        </div>

        <div className="px-4 py-4 md:py-8 bg-[url('/project3.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
          <div className="text">
            <h3 className="text-2xl font-medium mb-4 md:mb-6 font-nunito">
              Legal Aid Cell
            </h3>
            <p className="font-nunito">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis est soluta eum? Veniam, ex et!
            </p>
          </div>
          <div className="mt-5 self-start text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
            <button className="learn-more font-nunito">Learn more</button>
          </div>
        </div>
      </div>
      <Chart />
      <div className="flex items-center px-10 md:px-20 pt-10 bg-white">
        <h1 className="font-nunito font-extrabold text-2xl text-txtGreen">
          Our Events
        </h1>
        <div className="h-0.5 ml-10 mr-5 w-4/5 bg-[#096A56] rounded-lg"></div>
      </div>
      <div className="flex bg-white flex-col md:flex-row p-10 md:p-20">
        <div className="flex w-full md:w-1/2 md:mx-10 mb-5 md:mb-0 bg-bgGray h-36 items-center justify-around rounded-lg">
          <div className="flex flex-col">
            <h1 className="font-nunito text-3xl md:text-5xl text-gray-700">
              13
            </h1>
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
          <Link to="/events">
            <img src={arrow} alt="arrow" className="h-10 w-10 cursor-pointer" />
          </Link>
        </div>
        <div className="flex w-full md:w-1/2 md:mx-10 mb-5 md:mb-0 bg-bgGray h-36 items-center justify-around rounded-lg">
          <div className="flex flex-col">
            <h1 className="font-nunito text-3xl md:text-5xl text-gray-700">
              25
            </h1>
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
          <img src={arrow} alt="arrow" className="h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Home;
