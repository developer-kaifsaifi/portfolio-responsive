import React from "react";

export default function Project() {
  return (
    
    <div className=" items-center  justify-center md:justify-center md:items-center min-w-80vw pb-25 flex overflow-x-hidden min-h-[280vh] bg-[#000000]">
      <div className="flex mt-50 flex-col gap-15 items-center ">
        <div className="w-md mt-14  flex flex-col items-center justify-center">
          <h3 className="text-[#9C9C9C] tracking-widest outfit text-3.5 text-uppercase">
            FEATURED CASE STUDIES
          </h3>
          <h2 className="outfit text-white text-[3rem]  md:text-[3.37rem]">
           <span className="text-glow"> Curated</span>{" "}
            <span className=" moving-bg-text nyght font-semibold ">work</span>
          </h2>
        </div>
        <div className="min-w-screen justify-center items-center md:items-center flex flex-col py-8 gap-14 min-h-xl">
          <div className="flex gap-4 md:justify-center w-[90vw] flex-col md:flex-row min-w-[60vw] md:h-[426.23px]">
  <div className="w-full md:w-[23.81rem] h-75 md:h-[26.63rem] rounded-t-3xl md:rounded-l-3xl border-2 border-[#EDEDED0D] bg-[url(./assets/mac.png)] bg-size-[120%_110%] bg-center"></div>

  <div className="w-full md:w-199 h-75 md:h-[26.63rem] rounded-b-3xl md:rounded-r-3xl border-2 border-[#333333]"></div>
</div>

          <div className="w-[90vw] flex gap-4 md:items-center flex-col-reverse  md:flex-row  md:w-307 md:h-[426.23px]">
  <div className="w-full md:w-199 h-75 md:h-[426.23px] rounded-b-3xl md:rounded-l-3xl border-2 border-[#333333]"></div>

  <div className="w-full md:w-[381.59px] h-75 md:h-[426.23px] rounded-t-3xl md:rounded-r-3xl border-2 border-[#EDEDED0D] bg-[url(./assets/messenger.jpg)] bg-cover bg-center"></div>
</div>

          <div className="flex gap-4 md:items-center flex-col md:flex-row w-[90vw] md:w-307 md:h-[426.23px]">
  <div className="w-full md:w-[381.59px] h-75 md:h-[426.23px] rounded-t-3xl md:rounded-l-3xl border-2 border-[#EDEDED0D] bg-[url(./assets/pc.png)] bg-center bg-no-repeat bg-size-[99%_99%]"></div>

  <div className="w-full md:w-199 h-75 md:h-[426.23px] rounded-b-3xl md:rounded-r-3xl border-2 border-[#333333]"></div>
</div>

        </div>
      </div>
    </div>
  );
}
