import React from "react";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

import BannerMain from "../assets/bannerMain.png"
import BannerTwi from "../assets/bannerTwi.png"
import backupTable from "../assets/backup_table.png"
import Art from "../assets/atr.png"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* <div className="relative after:content-['*'] after:absolute after:-top-55 after:-left-61 after:w-163.5 after:h-163.5  after:rounded-full after:bg-linear-to-r/srgb from-[#FF6FB9] to-[#6797FF] after:blur-xxl after:z-10"></div> */}
      <div className="mt-12 xl:mt-20.5 relative z-0">
        <Container className="xl:h-dvh">
          <div className="lg:flex justify-between">
            <div className="w-full lg:w-120 xl:w-159.5">
              <div className="w-full lg:w-108 xl:w-129 lg:h-64 xl:h-82 text-center lg:text-start">
                <h1 className="font-Manrope font-medium text-5xl lg:text-7xl xl:text-xxl leading-16 lg:leading-20 xl:leading-25 tracking-tighter text-black">Your AI-Powered Sales Coach</h1>
              </div>
              <Flex className="mt-6.5 mb-18 xl:mb-23 items-center justify-center lg:justify-normal">
                <Link className="w-32 lg:w-40 xl:w-51 h-30 md:h-38 xl:h-49.5 mr-5 md:mr-12 xl:mr-17 bg-white flex items-center justify-center rounded-[20px]">
                  <img src={BannerTwi} alt="bannerTwi.png" />
                </Link>
                <div className="w-86.5 lg:h-33">
                  <p className="font-Manrope font-medium text-[15px] md:text-base xl:text-xl leading-6 md:leading-7 xl:leading-8 text-[#05131D] opacity-70">Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                </div>
              </Flex>
              <Flex className="items-center justify-center lg:justify-between">
                <Flex className="w-45 sm:w-48 md:w-60 xl:w-72 items-center justify-between">
                  <Link className="">
                    <Flex className="justify-center items-center w-14 md:w-16 xl:w-22.5 h-13 md:h-15 xl:h-21.5 mr-2 sm:mr-3 md:mr-6 xl:mr-8.5 bg-white rounded-2xl drop-shadow-3xl">
                      <img className="w-9 xl:w-12" src={backupTable} alt="backup_table.png" />
                    </Flex>
                  </Link>
                  <div className="w-36 md:w-41">
                    <h2 className="md:mb-1 font-Manrope font-semibold text-xl md:text-3xl xl:text-[40px] leading-8 xl:leading-11 text-[#05131D]">2000+</h2>
                    <p className="font-Manrope font-medium text-[15px] md:text-base xl:text-xl leading-6 xl:leading-8 text-[#05131D] opacity-70">Your protection</p>
                  </div>
                </Flex>
                <Flex className="w-45 sm:w-48 md:w-60 xl:w-72 items-center justify-between">
                  <Link className="">
                    <Flex className="justify-center items-center w-14 md:w-16 xl:w-22.5 h-13 md:h-15 xl:h-21.5 mr-2 sm:mr-3 md:mr-6 xl:mr-8.5 bg-white rounded-2xl drop-shadow-3xl">
                      <img className="w-9 xl:w-12" src={Art} alt="Art.png" />
                    </Flex>
                  </Link>
                  <div className="w-36 md:w-41">
                    <h2 className="md:mb-1 font-Manrope font-semibold text-xl md:text-3xl xl:text-[40px] leading-8 xl:leading-11 text-[#05131D]">7001+</h2>
                    <p className="font-Manrope font-medium text-[15px] md:text-base xl:text-xl leading-6 xl:leading-8 text-[#05131D] opacity-70">Provide tailored</p>
                  </div>
                </Flex>
              </Flex>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="w-full lg:w-102 xl:w-145.5 lg:h-124 xl:h-157">
                <Link>
                  <img className="w-full" src={BannerMain} alt="bannerMain.png" />
                </Link>
              </div>
              <div className="hidden md:block absolute bottom-0 left-0 lg:-left-24 xl:-left-44 w-102 lg:w-92 xl:w-116.5 h-68 lg:h-66 xl:h-86 py-8 xl:py-12.5 px-8 bg-white rounded-[27px] overflow-hidden drop-shadow-4xl">
                <div>
                  <Flex className="items-center justify-between">
                    <h2 className="font-Manrope font-semibold text-3xl xl:text-[50px] leading-8 xl:leading-12.5 text-[#00245F]">721+</h2>
                    <h2 className="font-Manrope font-semibold text-3xl xl:text-[50px] leading-8 xl:leading-12.5 text-[#00245F]">1000+</h2>
                  </Flex>
                </div>
                <div className="mt-8">
                  <h4 className="mb-10 font-Manrope font-semibold text-2xl xl:text-[28px] leading-6 xl:leading-7 text-[#05131D]">Growth is our priority.</h4>
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
