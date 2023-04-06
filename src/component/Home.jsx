import React from "react";

const Home = () => {
  return (
    <div className=" flex w-[60%] mx-auto gap-10 justify-between mt-20 ">
      <div className="space-y-12 py-44">
        <span>
          <h1 className="text-5xl font-bold ">New Collection For Fall</h1>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
        </span>
        <button className="bg-[#FF9900] rounded-md px-4 py-3">SHOP NOW</button>
      </div>
      <div className="bg-[#FFE0B3] rounded-md">
        <img
          className=" relative -top-6 left-4"
          src="../../images/austin-wade-AoYT0ArTTmg-unsplash 1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
