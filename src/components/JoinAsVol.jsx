import React, { useState } from 'react';

const JoinAsVol = () => {
  const [userData, setUserData] = useState({
    volunteerName: "",
    email: "",
    phoneNumber: ""
  });

  const postUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [name]: value });
  }

  const submitData = async (event) => {
    event.preventDefault();
    const { volunteerName, email, phoneNumber } = userData;

    if (volunteerName && email && phoneNumber) {
      const res = await fetch('https://ammas-ngo-default-rtdb.firebaseio.com/volunteersRecords.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          volunteerName: userData.volunteerName,
          email: userData.email,
          phoneNumber: userData.phoneNumber
        })
      });

      if (res) {
        setUserData({
          volunteerName: "",
          email: "",
          phoneNumber: ""
        });

        alert("Registered!");
      } 
      else {
        alert("Please fill in the details!");
      }
    } 
    else {
      alert("Please fill in the details!");
    }
  };

  return (
    <div className="bg-[#E8EBF0] flex flex-col md:p-16 xl:p-24">
      <div className="flex items-center justify-center text-center mb-4">
        <h1 className="font-nunito font-bold text-lg text-txtGreen">JOIN AS A VOLUNTEER</h1>
      </div>

      <form className="w-full md:w-2/5 mx-auto">
        <div className="form-group font-nunito">
          <div className="flex mt-1 mb-4 focus-within:outline focus-within:outline-slate-400 rounded">
            <input
              type="text"
              id="volunteerName"
              name="volunteerName"
              placeholder="Volunteer's Name"
              value={userData.volunteerName}
              onChange={postUserData}
              className="w-full px-2 py-1 bg-white focus-within:outline rounded"
              />
          </div>
        </div>

        <div className="form-group font-nunito">
          <div className='flex mt-1 mb-4 focus-within:outline focus-within:outline-slate-400 rounded'>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={postUserData}
              className="w-full px-2 py-1 bg-white focus-within:outline rounded"
            />
          </div>
        </div>

        <div className="form-group font-nunito">
          <div className='flex mt-1 mb-4 focus-within:outline focus-within:outline-slate-400 rounded'>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Mobile Number"
              value={userData.phoneNumber}
              onChange={postUserData}
              className="w-full px-2 py-1 bg-white focus-within:outline rounded"
            />
          </div>
        </div>
        <div className='text-center'>

        <button className='w-full max-w-[150px] mx-auto bg-green-500 text-black hover:bg-green-800 hover:text-white text-l font-nunito font-medium py-1 rounded-full cursor-pointer text-center mt-2 transition-transform transform hover:scale-105' onClick={submitData}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JoinAsVol;
