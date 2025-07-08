import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Twist from "../assets/bannerTwi.png";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-8 sm:bottom-7 lg:bottom-5 right-0 sm:right-2 cursor-pointer w-10 sm:w-16 lg:w-22 h-7 sm:h-10 lg:h-14 rounded-[70px] border border-[#00245F] flex items-center justify-center text-[#00245F] hover:text-white bg-transparent hover:bg-[#00245F]"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-8 sm:bottom-7 lg:bottom-5 right-28 sm:right-42 lg:right-50 xl:right-60 z-10 cursor-pointer w-10 sm:w-16 lg:w-22 h-7 sm:h-10 lg:h-14 rounded-[70px] border border-[#00245F] flex items-center justify-center text-[#00245F] hover:text-white bg-transparent hover:bg-[#00245F]"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const SliderPart = () => {
  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          right: "10%",
          bottom: "36px",
          transform: "translateX(-10%)",
        }}
      >
        <ul className="flex items-center justify-center gap-0.5 sm:gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="SliderActive w-5 h-5 flex items-center justify-center">
        {i + 1}
      </div>
    ),
  };

  let sliderImage = [
    { id: 1, title:"COO of Basecamp", name: "Michael Kaizer", para:"“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”" },
    { id: 2, title:"CEO of rzk Corp", name: "Parvez Mir", para:"“ They conduct in-depth analyses of our market and target demographic, which enables them to create tailored advertising campaigns that successfully connect with and engage our clients. We have been able to stay ahead of the competition thanks to their innovative ideas and cutting-edge methods.”" },
    { id: 3, title:"CEO of Google Corp", name: "Tabassum", para:"“ They create tailored campaigns that successfully reach and engage our customers by carefully examining our market and target demographic. Their innovative methods and imaginative ideas have kept us one step ahead of the competition.”" },
  ];
  return (
    <>
      <Container className="my-9">
        <Slider {...settings}>
          {sliderImage.map((item) => (
            <div className="block h-92 sm:h-84 md:h-110 lg:h-96 xl:h-84 relative -z-10">
              <div className="mb-18">
                <h2 className="font-Manrope font-semibold text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl leading-8 sm:leading-10 md:leading-14 tracking-[-3%] text-[#010205]">
                  {item.para}
                </h2>
              </div>
              <Flex className="absolute bottom-4 left-0 z-20 items-center">
                <Link>
                  <img className="w-12 h-12 rounded-full border-4 border-gray-300" src={Twist} alt="bannerTwi.png" />
                </Link>
                <div className="ml-2 sm:ml-4">
                  <h3 className="font-poppins font-semibold text-base sm:text-xl leading-7 sm:leading-9 text-[#010205]">
                    {item.name}
                  </h3>
                  <p className="font-poppins font-medium text-base leading-7 text-[#878C91]">
                    {item.title}
                  </p>
                </div>
              </Flex>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default SliderPart;
