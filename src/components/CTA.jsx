import React from "react";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

const CTA = () => {
  return (
    <>
      <div className="py-9 bg-[#FAFAFA]">
        <Container>
          <div className="py-20 rounded-3xl bg-linear-to-r/hsl from-[#103571] to-[#014FCD]">
            <Flex className="items-center justify-center">
              <div className="text-center">
                <div className="mb-12">
                  <h2 className="font-Manrope font-semibold text-[28px] sm:text-[38px] leading-9 sm:leading-12.5 text-white">
                    Ready to Hire Smarter?
                  </h2>
                  <p className="mt-3 font-Manrope font-normal text-sm sm:text-base leading-5 sm:leading-6.5 capitalize text-[#B9BDC7]">
                    Unlock Exclusive Insights Subscribe to Our Newsletter
                  </p>
                </div>
                <div>
                    <button className="py-4 px-9 rounded-[50px] cursor-pointer bg-[#FCE38A] font-Manrope font-medium text-base leading-6.5 text-[#00245F]">Join Now</button>
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CTA;
