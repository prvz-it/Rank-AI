import React from "react";
import { Link } from "react-router-dom";
import Flex from "../layer/Flex";

const BannerReusable = ({img, title, para}) => {
  return (
    <>
      <Flex className="w-42 sm:w-53 xl:w-67 items-center justify-between">
        <Link className="">
          <Flex className="justify-center items-center w-12 sm:w-18 xl:w-22.5 h-11 sm:h-17 xl:h-21.75 mr-2 sm:mr-4 xl:mr-6 bg-white rounded-2xl drop-shadow-3xl">
            <img
              className="w-6 sm:w-8 xl:w-12"
              src={img}
              alt={img}
            />
          </Flex>
        </Link>
        <div className="">
          <h2 className="md:mb-1 font-Manrope font-semibold text-xl md:text-3xl xl:text-[40px] leading-8 xl:leading-11 text-[#05131D]">
            {title}
          </h2>
          <p className="font-Manrope font-medium text-[15px] md:text-base xl:text-xl leading-6 xl:leading-8 text-[#05131D] opacity-70">
            {para}
          </p>
        </div>
      </Flex>
    </>
  );
};

export default BannerReusable;
