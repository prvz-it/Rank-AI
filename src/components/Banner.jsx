import React from "react";
import { Link } from "react-router-dom";

import BannerReusable from "./reusable/BannerReusable";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

import BannerMain from "../assets/bannerMain.png"
import BannerTwi from "../assets/bannerTwi.png"
import backupTable from "../assets/backup_table.png"
import Art from "../assets/atr.png"

const Banner = () => {
  return (
    <>
      {/* <div className="relative after:content-['*'] after:absolute after:-top-55 after:-left-61 after:w-163.5 after:h-163.5  after:rounded-full after:bg-linear-to-r/srgb from-[#FF6FB9] to-[#6797FF] after:blur-xxl after:z-10"></div> */}
      <div className="mt-12 xl:mt-20.5 relative z-0">
        <Container className="xl:h-dvh">
          <div className="lg:flex justify-between">
            <div className="w-full lg:w-1/2 lg:mr-1.5 xl:mr-4 ">
              <div className="w-full lg:w-108 xl:w-129 text-center lg:text-start">
                <h1 className="font-Manrope font-medium text-5xl lg:text-7xl xl:text-xxl leading-16 lg:leading-20 xl:leading-25 tracking-tighter text-black">Your AI-Powered Sales Coach</h1>
              </div>
              <Flex className="mt-6.5 mb-12 xl:mb-18 items-center justify-center lg:justify-normal">
                <Link className="w-38 xl:w-48 mr-8 xl:mr-12 bg-white flex items-center justify-center rounded-[20px]">
                  <img src={BannerTwi} alt="bannerTwi.png" />
                </Link>
                <div className="w-64 xl:w-80.5">
                  <p className="font-Manrope font-medium text-[15px] md:text-base xl:text-xl leading-6 md:leading-7 xl:leading-8 text-[#05131D] opacity-70">Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                </div>
              </Flex>
              <Flex className="items-center justify-evenly">
                <BannerReusable img={backupTable} title="2000+" para="Your protection"/>
                <BannerReusable img={Art} title="7001+" para="Provide tailored"/>
              </Flex>
            </div>
            <div className="relative w-full lg:w-1/2 lg:ml-1.5 xl:ml-4 mt-12 lg:mt-0">
              <div className="block lg:flex justify-end">
                <Link className="w-full lg:w-96 xl:w-130.5">
                  <img className="w-full" src={BannerMain} alt="bannerMain.png" />
                </Link>
              </div>
              <div className="hidden sm:block absolute bottom-0 left-0 w-100 md:w-106 lg:w-92 xl:w-102.5 py-8 xl:py-10.5 px-8 bg-white rounded-[27px] overflow-hidden drop-shadow-4xl">
                <div>
                  <Flex className="items-center justify-between">
                    <h2 className="font-Manrope font-semibold text-3xl xl:text-[42px] leading-8 xl:leading-12.5 text-[#00245F]">721+</h2>
                    <h2 className="font-Manrope font-semibold text-3xl xl:text-[42px] leading-8 xl:leading-12.5 text-[#00245F]">1000+</h2>
                  </Flex>
                </div>
                <div className="mt-8 lg:mt-6">
                  <h4 className="mb-10 lg:mb-8 font-Manrope font-semibold text-2xl xl:text-[28px] leading-6 xl:leading-7 text-[#05131D]">Growth is our priority.</h4>
                  <p className="font-Poppins font-medium text-[15px] xl:text-[17px] leading-6 xl:leading-7 text-[#05131D] opacity-70">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
