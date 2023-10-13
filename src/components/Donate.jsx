import donate from "../assets/donate.png";

const Donate = () => {
  return (
    <div className="">
      <div className="bg-[#E8EBF0] flex flex-col md:flex-row p-8 md:p-16">
        <div className="flex flex-col w-full md:w-3/5">
          <div className="flex items-center">
            <div className="h-0.5 mr-5 w-14 bg-[#096A56] rounded-lg"></div>
            <h1 className="font-nunito font-bold text-lg text-txtGreen">
              DONATE
            </h1>
          </div>
          <h1 className="text-5xl mt-2 md:mt-9 font-nunito font-bold py-5 text-txtGreen">
            Making a donation for our children.
          </h1>
          <h1 className="text-xl mt-2 font-nunito text-gray-700">
            When you donate, you’re supporting effective care to children with
            special needs an investment in the leaders of tomorrow.
          </h1>
          <button
            type="button"
            className="my-5 focus:outline-none w-32 text-bgGray bg-[#096A56] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-5 "
          >
            <a href="https://donate.stripe.com/test_aEUbJ371FbscarueUU">Donate Now</a>
          </button>
        </div>
        <div className="w-full md:w-2/5 md:px-10">
          <img src={donate} alt="donate" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-5 md:p-10">
          <h1 className="text-4xl mt-2 md:mt-9 font-nunito font-bold py-5 text-txtGreen">
            How you can contribute to caring for our kids
          </h1>
          <h1 className="text-xl mt-2 font-nunito text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </h1>
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-5 md:p-10">
          <div className="flex justify-around mt-2 md:mt-9">
            <h1 className="text-xl mt-2 font-bold font-nunito text-gray-700">
              Overview
            </h1>
            <h1 className="text-xl mt-2 font-bold font-nunito text-gray-700">
              Impact
            </h1>
            <h1 className="text-xl mt-2 font-bold font-nunito text-gray-700">
              What you get
            </h1>
          </div>
          <h1 className="text-xl mt-8 font-nunito text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </h1>
          <h1 className="text-xl mt-4 font-nunito text-gray-700">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </h1>
        </div>
      </div>
      <hr className="h-px w-11/12 my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <div className="flex flex-col md:flex-row p-5 md:p-10">
        <div className="w-full md:w-1/3 md:p-5">
          <h1 className="text-4xl mt-2 md:mt-9 font-nunito font-bold text-txtGreen">
            How we use your donation
          </h1>
        </div>
        <div className="w-full md:w-1/3 md:p-10">
          <h1 className="text-xl mt-4 font-nunito text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Nunc ut sem vitae risus tristique posuere.
          </h1>
        </div>
        <div className="w-full md:w-1/3 md:p-10">
          <h1 className="text-xl mt-4 font-nunito text-gray-700">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet.
          </h1>
        </div>
      </div>
      <div className="flex p-5 md:px-20 md:pb-0 bg-white justify-center">
        <div className="flex flex-col items-center justify-center md:m-10 md:pb-10 px-3 md:px-20 bg-ctaBg bg-cover w-full h-60 md:h-80 rounded-3xl bg-no-repeat">
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
              <a href="https://donate.stripe.com/test_aEUbJ371FbscarueUU">Donate</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
