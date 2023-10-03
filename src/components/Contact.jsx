import map from '../assets/map.jpeg';

const Contact = () =>{
    return(
        <>
        <section className="bg-[#E8EBF0] text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:pl-28">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="relative pl-6">
              <span className="text-gray-900">CONTACT US</span>
              <span className="absolute h-0.5 w-4 left-0 bottom-2 bg-gray-900"></span>
            </h1>
            
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900"> <b>We'd love to hear <br></br> from you </b>
            </h1>
            <p className="mb-8 leading-relaxed">Have any questions in mind or want to enquire? Please fell free to
                contact us through forms or the following details.</p>
            <div className="flex justify-center">
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
             <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Let's talk!</h2>
                  <h3 className="text-gray-500 mb-3">+91 1234567891 testing1234@gmail.com</h3>
    
                  <h2 className="title-font font-medium text-lg text-gray-900 pt-5">Headoffice</h2>
                  <h3 className="text-gray-500 mb-3">No. 5/1, Durga Mata Mandir Road, Moti Nagar 110015 New Delhi, India</h3>
    
                  {/* <h2 className="title-font font-medium text-lg text-gray-900 pt-5">Branch Office</h2>
                  <h3 className="text-gray-500 mb-3">Opp Opoplp road about , Yenagos, Bayelsa , Nigeria</h3> */}
                  
                  <span className="inline-flex">
                    <a className="text-gray-500 pt-4">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500 pt-4">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500 pt-4">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

    <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-11 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-50 border-b border-black border-opacity-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>  
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Last Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-50 border-b border-black border-opacity-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div> 
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full  bg-opacity-50 border-b border-black border-opacity-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Subject</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-50 border-b border-black border-opacity-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" placeholder="Type your Message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#096A56] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src={map} height="2px"></img>
      </>
    )
}

export default Contact;