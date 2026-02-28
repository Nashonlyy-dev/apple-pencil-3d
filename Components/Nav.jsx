import React from "react";
import { BiCart } from "react-icons/bi";
import { IoPencilOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="flex w-full p-6 items-center justify-between fixed top-0 left-0 z-50 bg-[#0b0b0d] bg-opacity-80 backdrop-blur-md">
      <div className="w-[10px] text-3xl">
        <IoPencilOutline  />
        <h6 className="text-[15px] font-[faxien]">pencil</h6>
      </div>

      <div className="flex gap-3  ">
        <a className="hover:text-gray-400" href="#">Overview</a>
        <a className="hover:text-gray-400" href="#">Desgin</a>
        <a className="hover:text-gray-400" href="#">Precision</a>
        <a className="hover:text-gray-400" href="#">Compatibility</a>
      </div>

      <div className="flex items-center rounded-xl text-md p-3 bg-[#000000] text-[#d5d5e7] cursor-pointer hover:bg-zinc-900">
        <h4>Buy</h4><BiCart/>
      </div>
    </div>
  );
};

export default Nav;
