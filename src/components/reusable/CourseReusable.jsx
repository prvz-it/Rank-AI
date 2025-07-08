import React from "react";
import { Link } from "react-router-dom";
import Flex from "../layer/Flex";

const CourseReusable = ({Img, intoLeft, intoRight, name, title, para, button,}) => {
  return (
    <>
      <div className="w-full sm:w-[49%] p-6 lg:p-12.5 rounded-2xl border border-[#F1F1F3] bg-[#F0F0F0]">
        <div>
          <Link>
            <img className="rounded-lg" src={Img} alt={Img} />
          </Link>
        </div>
        <div className="my-7.5">
          <Flex className="items-center justify-between">
            <div className="w-37 md:w-46 lg:w-55">
              <Flex className="justify-between">
                <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                  <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">
                    {intoLeft}
                  </p>
                </Link>
                <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                  <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">
                    {intoRight}
                  </p>
                </Link>
              </Flex>
            </div>
            <h4 className="font-Manrope font-medium text-base lg:text-xl leading-5 text-[#262626]">
              {name}
            </h4>
          </Flex>
          <div className="mt-7.5">
            <h3 className="mb-3.5 font-Manrope font-semibold text-xl md:text-2xl leading-7.5 md:leading-9 text-[#262626]">
              {title}
            </h3>
            <p className="font-Manrope font-normal text-base sm:text-lg leading-6 sm:leading-6.75 text-[#4C4C4D]">
              {para}
            </p>
          </div>
        </div>
        <button className="w-full py-4.5 px-6 rounded-lg border border-[#F1F1F3] cursor-pointer bg-[#002868] font-Poppins font-medium text-lg leading-6.75 text-white">
          {button}
        </button>
      </div>
    </>
  );
};

export default CourseReusable;
