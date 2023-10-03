import "./WhatWeDo.css";
import img from "../assets/unsplash_AEaTUnvneik.svg";
import icon1 from "../assets/Icon.svg";
import icon2 from "../assets/Icon1.svg";
import icon3 from "../assets/Icon2.svg";
import icon4 from "../assets/Icon3.svg";
import icon5 from "../assets/Icon4.svg";
import icon6 from "../assets/Icon5.svg";
import arrow from '../assets/arrow.png';

function Page() {
  return (
    <div>
      <div className="whatwedo p-6 md:pt-8 md:p-1 flex flex-col md:flex-row">
        <div className="left md:ml-24 md:w-1/2">
          <div className="container">
            <div className="line"></div>
            <div className="heading  md:text-2xl font-bold text-[#22495F] text-lg">
              What We Do
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mt-4 font-nunito text-[#22495F]">
            We are working <br /> cross country
          </h1>
          <p className="content text-md md:text-xl  flex justify-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia
            tempore tenetur ipsa ipsam rem quia optio nobis! Eveniet beatae
            pariatur voluptatem, commodi, quia exercitationem nulla dolor
            veritatis consequuntur eligendi quaerat consequatur iste earum ipsam
            odit provident nihil cum aliquid minima veniam enim impedit saepe
            quam eum? Perferendis, sapiente reiciendis?
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:mr-24 mr-4 ml-4 md:ml-0 mb-4 md:mb-8 ">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h1
          className="text-2xl md:text-4xl font-semibold mt-4 font-nunito text-[#22495F]"
          style={{ marginLeft: "5%" }}
        >
          What we do for our kids with special needs
        </h1>
        <div className="section">
          <div className="sectiontwo mt-8 flex flex-col mr-24 md:flex-row">
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon1} alt="" className="w-14 h-14 mb-4" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Basic amenities
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon2} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Therapy
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon3} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Public outreach
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="sectiontwo flex flex-col mr-24 -mt-8 md:flex-row md:mt-4 ">
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon4} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Family support
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon5} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Health benefits
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon6} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Education
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionthree">
        <div className="container">
          <div className="line md:mb-8 mt-4"></div>
          <div className="heading md:mb-8 md:text-2xl font-bold text-[#22495F] text-lg mt-4">
            PROJECTS WE HAVE DONE
          </div>{" "}
          <br />
        </div>
        <h1 className="headthree text-xl font-semibold md:ml-24 mb-8 md:text-4xl -ml:24">
          We are creating a place <br /> where children with special <br />
          needs can thrive
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] md:mr-20 mr-4 gap-6 h-auto text-white">
          <div className="px-4 py-4 md:py-8 bg-[url('./project1.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
            <div className="text">
              <h3 className="text-2xl font-medium mb-4 md:mb-6 font-nunito">
                Mission 1k smile: Outdoor charity
              </h3>
              <p className="font-nunito">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est soluta eum? Veniam, ex et!
              </p>
            </div>
            <div className="self-start mt-auto text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
              <button className="learn-more">Learn more</button>
            </div>
          </div>

          <div className="px-4 py-4 md:py-8 bg-[url('/project2.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
            <div className="text">
              <h3 className="text-2xl font-medium mb-4 md:mb-6">
                Weekly excursions
              </h3>
              <p className="font-nunito">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est soluta eum? Veniam, ex et!
              </p>
            </div>
            <div className="self-start mt-auto text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
              <button className="learn-more font-nunito">Learn more</button>
            </div>
          </div>

          <div className="px-4 py-4 md:py-8 bg-[url('/project3.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
            <div className="text">
              <h3 className="text-2xl font-medium mb-4 md:mb-6 font-nunito">
                Monthly public awareness
              </h3>
              <p className="font-nunito">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est soluta eum? Veniam, ex et!
              </p>
            </div>
            <div className="self-start mt-auto text-black font-medium btn bg-white flex justify-center h-[40px] text-center rounded w-[100px]">
              <button className="learn-more font-nunito">Learn more</button>
            </div>
          </div>
        </div>

        <div className="contribute bg-[url('contribute.png')] bg-center bg-cover bg-no-repeat my-4 md:my-[50px] h-[250px] md:h-[350px] flex flex-col justify-center text-center rounded-3xl md:mr-20 mr-4">
          <div className="text my-4 md:my-0 px-4 md:px-[20%]">
            <h1 className="text-2xl md:text-4xl font-medium text-white font-nunito">
              You can contribute to provide a place for children with special
              needs!
            </h1>
          </div>

          <div className="btns flex justify-center my-4">
            <div className="font-medium volunteer mx-3 bg-[#096A56] flex justify-center text-white h-[40px] md:h-[50px] text-center rounded w-40 md:w-[200px]">
              <button className="text-xs md:text-lg">Join as a voluteer</button>
            </div>
            <div className="font-medium learn-more mx-3 bg-white flex justify-center h-[40px] md:h-[50px] text-center rounded w-40 md:w-[100px]">
              <button className="text-xs md:text-base">Donate</button>
            </div>
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
}
export default Page;
