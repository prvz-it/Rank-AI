import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Container from "./layer/Container";

const FAQ = () => {

    let [view1, setView1] = useState(false);
    let [view2, setView2] = useState(false);
    let [view3, setView3] = useState(false);
     
  return (
    <>
      <Container className="mb-20">
        <div className="w-80 sm:w-150 lg:w-248 mx-auto text-center">
          <h2 className="font-Questrial font-normal text-3xl lg:text-6xl leading-10 lg:leading-18 tracking-[-1%] text-[#111111]">Constant collaboration is how we roll. Let's see if we are a good fit.</h2>
        </div>
        <div className="mt-15">
            <div className="pb-40 sm:pb-22 lg:pb-18 xl:pb-12 flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <h4 className="font-Questrial font-normal text-base sm:text-2xl leading-6 tracking-[-1%] text-[#8B7D4C]">01</h4>
                    </div>
                    <div className="w-79 sm:w-152 md:w-2xl lg:w-4xl xl:w-5xl ml-1 sm:ml-3 lg:ml-6 xl:ml-10 relative">
                        <h3 className="font-Questrial font-normal text-base sm:text-xl lg:text-3xl leading-6 lg:leading-8 tracking-[-1%] text-[#111111]">Why should I choose Hematic?</h3>
                        <div className={` absolute ${ view1 == true ? 'top-5 md:top-7 left-0 w-full duration-700 z-10 ' : 'top-0 opacity-0 invisible left-0 w-full duration-700 -z-10' }`}>
                            <p className="font-Poppins font-normal text-sm leading-5.5 tracking-[-2%] text-[#636363]">Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => {setView1(!view1)}}>
                    {view1 == true ? <FaPlus /> : <FaMinus />}
                </div>
            </div>
            <div className="pb-40 sm:pb-22 lg:pb-18 xl:pb-12 flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <h4 className="font-Questrial font-normal text-base sm:text-2xl leading-6 tracking-[-1%] text-[#8B7D4C]">02</h4>
                    </div>
                    <div className="w-79 sm:w-152 md:w-2xl lg:w-4xl xl:w-5xl ml-1 sm:ml-3 lg:ml-6 xl:ml-10 relative">
                        <h3 className="font-Questrial font-normal text-base sm:text-xl lg:text-3xl leading-6 lg:leading-8 tracking-[-1%] text-[#111111]">I like your works, how do we start a project?</h3>
                        <div className={` absolute ${ view2 == true ? 'top-5 md:top-7 left-0 w-full duration-700 z-10 ' : 'top-0 opacity-0 invisible left-0 w-full duration-700 -z-10' }`}>
                            <p className="font-Poppins font-normal text-sm leading-5.5 tracking-[-2%] text-[#636363]">Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => {setView2(!view2)}}>
                    {view2 == true ? <FaPlus /> : <FaMinus />}
                </div>
            </div>
            <div className="pb-40 sm:pb-22 lg:pb-18 xl:pb-12 flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <h4 className="font-Questrial font-normal text-base sm:text-2xl leading-6 tracking-[-1%] text-[#8B7D4C]">03</h4>
                    </div>
                    <div className="w-79 sm:w-152 md:w-2xl lg:w-4xl xl:w-5xl ml-1 sm:ml-3 lg:ml-6 xl:ml-10 relative">
                        <h3 className="font-Questrial font-normal text-base sm:text-xl lg:text-3xl leading-6 lg:leading-8 tracking-[-1%] text-[#111111]">What info is required to get a quotation?</h3>
                        <div className={` absolute ${ view3 == true ? 'top-5 md:top-7 left-0 w-full duration-700 z-10 ' : 'top-0 opacity-0 invisible left-0 w-full duration-700 -z-10' }`}>
                            <p className="font-Poppins font-normal text-sm leading-5.5 tracking-[-2%] text-[#636363]">Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => {setView3(!view3)}}>
                    {view3 == true ? <FaPlus /> : <FaMinus />}
                </div>
            </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
