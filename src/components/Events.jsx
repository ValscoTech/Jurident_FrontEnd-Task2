import child from "../assets/child.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import arrow from '../assets/arrow.png';

const Events = () => {
  return (
    <div className="w-full">
    <div className="font-roboto w-full">
      <div className="w-full h-fit bg-gray-200 pb-10">
        <div className="pt-20 w-4/5 md:w-[50%] mx-auto mt-auto mb-auto ">
          <h1 className="text-5xl font-bold pb-10 leading-normal">
            A day with our wonderful children
          </h1>
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          <span className="mr-10 text-sm">
            Opp Opolo round about, Yenagoa,Bayelsa,Nigeria
          </span>
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          <span className="text-sm">April 13,2022 8:30 AM</span>
        </div>
      </div>
      <div className="w-4/5 md:w-[50%] mx-auto">
        <h1 className="text-4xl font-bold pb-10 mt-16">About</h1>
        <p>
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <br />
        <p>
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras.{" "}
        </p>
        <p>
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit
          dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare
          tristique. Integer faucibus duis praesent tempor feugiat ornare in.
          Erat libero egestas porttitor nunc pellentesque mauris et pulvinar
          eget.
        </p>
        <br />
        <img src={child} alt="child image" style={{ borderRadius: "20px" }} />
        <br />
        <p className="pb-32">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
      </div>
    </div>
    <div className="flex items-center px-10 md:px-20 pt-10 bg-white">
        <h1 className="font-nunito font-extrabold text-2xl text-txtGreen">
          Other Events
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
export default Events;
