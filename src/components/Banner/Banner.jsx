import React from "react";
import bannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="bg-[#13131310] my-8 rounded-xl flex flex-col-reverse md:flex-row justify-around items-center p-10">
      <div className="space-y-10 text-center md:text-start">
        <h1 className="text-3xl md:text-4xl font-bold">
          Books to freshen up
          <br /> your bookshelf
        </h1>
        <button className="btn btn-success text-base text-white font-medium">
          View The List
        </button>
      </div>
      <div>
        <img className="w-40 h-60 md:w-80 md:h-96" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
