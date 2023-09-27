const Footer = () => {
  return (
    <footer className="bg-black h-72 p-16">
      <div className="flex">
        <div className="w-2/6">
          <h1 className="font-courgette text-xl text-[#E8EBF0]">
            Christamelon Foundation
          </h1>
        </div>
        <div className="flex w-5/6 pl-24">
          <div className="flex flex-col w-1/3">
            <p className="text-sm my-2 text-[#E8EBF0] font-nunito">Home</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">About us</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Team</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">What we do</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Contact</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-sm my-2 text-[#E8EBF0] font-nunito">More</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Projects</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Events</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Donate</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Blog</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-sm my-2 text-[#E8EBF0] font-nunito">Connect</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Facebook</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Instagram</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Twitter</p>
            <p className="text-sm my-2 text-gray-400 font-nunito">Linkedin</p>
          </div>
        </div>
        <div className="w-2/6">
          <div className="flex flex-col">
            <h1 className="font-nunito font-bold text-2xl text-[#E8EBF0]">
              Subscribe to get latest updates
            </h1>
            <div className="flex py-10">
                <input type="text" placeholder="Your Email" className="bg-black text-white px-5 py-2 focus:outline-0 border-gray-700 border-[1px] rounded-md"/>
                <button className="bg-[#E8EBF0] px-5 py-2 rounded-md">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
