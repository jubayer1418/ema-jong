import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between  bg-[#1C2B35] px-32 py-8">
      <span className="cursor-pointer">
        <img src="../../images/Ema-John.png" alt="" />
        <div>
          <img className="mx-auto p-2" src="../../images/amazon.png" alt="" />
        </div>
      </span>
      <nav>
        <ul className="inline-flex gap-12 font-semibold text-[#FFFFFF]">
          <li className="hover:text-emerald-300 duration-1000">
            <a href="">Order</a>
          </li>
          <li className="hover:text-emerald-300 duration-1000">
            <a href="">Order Review</a>
          </li>
          <li className="hover:text-emerald-300 duration-1000">
            <a href="">Manage Inventory</a>
          </li>
          <li className="hover:text-emerald-300 duration-1000">
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
