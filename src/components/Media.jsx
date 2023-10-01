import autism from "../assets/autism.svg";
import cerebral from "../assets/cerebral.svg";
import down_syndrome from "../assets/down_syndrome.svg";
import arrow from "../assets/arrow.png";

const Media = () => {
  return (
    <>
      <section className="bg-[#E8EBF0] font-body p-20 ">
        <div className="flex justify-between">
          <div className="">
            <h6 className="relative pl-20 mb-5">
              <span className="font-bold tracking-widest text-sm text-gray-700 ">
                TOP NEWS
              </span>
              <span className="absolute h-0.5 w-14 left-0 bottom-2 bg-gray-900"></span>
            </h6>
            <div className="mx-auto">
              <h1 className="font-bold text-6xl font-body">
                Our goal is to <br /> provide inclusive <br /> care for children{" "}
                <br /> with special needs
              </h1>

              <p className="mt-10 font-medium ">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc
                <br /> ut sem vitae risus tristique posuere.
              </p>

              <button className="bg-[#096A56] py-3 px-5 rounded text-white mt-7">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-white  rounded-2xl p-5 pr-16">
            <div className="flex justify-between mb-3 ">
              <img src={autism} alt="" className="w-44 h-160" />
              <div className="ml-4">
                <h6 className="font-bold mt-4 ">Austism care day</h6>
                <p className="font-semibold text-gray-400 text-xs my-2">
                  15th Nov 2022
                </p>
                <p className="font-medium text-black ">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Suspendisse varius enim
                </p>
              </div>
            </div>

            <div className="flex justify-between mb-3">
              <img src={down_syndrome} alt="" className="w-44 h-160" />
              <div className="ml-4">
                <h6 className="font-bold mt-4">Down syndrome outreach</h6>
                <p className="font-semibold text-gray-400 text-xs my-2">
                  15th Nov 2022
                </p>
                <p className="font-medium text-black ">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Suspendisse varius enim
                </p>
              </div>
            </div>

            <div className="flex justify-between ">
              <img src={cerebral} alt="" className="w-44 h-160" />
              <div className="ml-4">
                <h6 className="font-bold mt-4">Down syndrome outreach</h6>
                <p className="font-semibold text-gray-400 text-xs my-2">
                  15th Nov 2022
                </p>
                <p className="font-medium text-black ">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Suspendisse varius enim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="flex px-20 pt-20 pb-0 bg-white justify-center">
          <div className="flex flex-col items-center justify-center m-10 py-10 px-20 bg-ctaBg bg-cover w-full h-80 rounded-3xl bg-no-repeat">
            <h1 className="font-nunito my-3 w-4/6 text-4xl text-white text-center">
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
        <div className="flex items-center px-20 pt-10 bg-white">
          <h1 className="font-nunito font-extrabold text-2xl text-txtGreen">
            Our Events
          </h1>
          <div className="h-0.5 ml-10 mr-5 w-4/5 bg-[#096A56] rounded-lg"></div>
        </div>
        <div className="flex bg-white p-20">
          <div className="flex w-1/2 mx-10 bg-bgGray h-36 items-center justify-around rounded-lg">
            <div className="flex flex-col">
              <h1 className="font-nunito text-5xl text-gray-700">13</h1>
              <h1 className="font-nunito text-xs font-bold text-center text-gray-700">
                APR
              </h1>
            </div>
            <div className="flex flex-col w-4/6">
              <h1 className="font-nunito text-xs font-bold text-gray-700">
                NEXT EVENTS
              </h1>
              <h1 className="font-nunito text-xl font-bold  text-gray-700">
                A day with our wonderful children
              </h1>
            </div>
            <img src={arrow} alt="arrow" className="h-10 w-10 cursor-pointer" />
          </div>
          <div className="flex w-1/2 mx-10 bg-bgGray h-36 items-center justify-around rounded-lg">
            <div className="flex flex-col">
              <h1 className="font-nunito text-5xl text-gray-700">25</h1>
              <h1 className="font-nunito text-xs text-center font-bold text-gray-700">
                APR
              </h1>
            </div>
            <div className="flex flex-col w-4/6">
              <h1 className="font-nunito text-xs font-bold text-gray-700">
                NEXT EVENTS
              </h1>
              <h1 className="font-nunito text-xl font-bold  text-gray-700">
                Seminar: Caring for children with autism
              </h1>
            </div>
            <img src={arrow} alt="arrow" className="h-10 w-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
