import React from "react";

export default function Project() {
  return (
    <div className="pt-35  w-screen pb-25  overflow-x-hidden min-h-screen bg-[#000000]">
      <div className="flex   flex-col  items-center ">
        <div className="w-md mt-14  flex flex-col items-center justify-center">
          <h3 className="text-[#9C9C9C] tracking-widest outfit text-[14px] text-uppercase">
            FEATURED CASE STUDIES
          </h3>
          <h2 className="outfit text-white  text-[54px]">
           <span className="text-glow"> Curated</span>{" "}
            <span className=" moving-bg-text nyght font-semibold ">work</span>
          </h2>
        </div>
        <div className="min-w-lg flex flex-col py-8 gap-14 min-h-xl">
          <div className="flex gap-4  w-307 h-[426.23px] ">
            <div className="w-[381.59px] h-[426.23px] rounded-l-3xl border-2  border-[#EDEDED0D] bg-[url(./assets/mac.png)] bg-size-[120%_110%] bg-center  "></div>
            <div className="w-[calc(100%-381.59px-50px)] h-[426.23px] rounded-r-3xl border-2  border-[#333333]   "><div className="w-full h-full "></div></div>
          </div>
          <div className="flex gap-4  w-307 h-[426.23px] ">
            <div className="w-[calc(100%-381.59px-50px)] h-[426.23px] rounded-l-3xl border-2   border-[#333333]    "></div>
            <div className="w-[381.59px] h-[426.23px] rounded-r-3xl border-2 border-[#EDEDED0D] bg-[url(./assets/messenger.jpg)] bg-cover bg-center  "></div>
          </div>
          <div className="flex gap-4  w-307 h-[426.23px] ">
            <div className="w-[381.59px] h-[426.23px] rounded-l-3xl border-2 border-[#EDEDED0D] bg-[url(./assets/pc.png)] bg-center  bg-no-repeat bg-size-[99%_99%]   "></div>
            <div className="w-[calc(100%-381.59px-50px)] h-[426.23px] rounded-r-3xl border-2  border-[#333333]    "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
