import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClipboard, FaRegThumbsDown, FaRegThumbsUp, FaCheckCircle } from "react-icons/fa";
import { BsFileEarmarkTextFill, BsChatTextFill } from "react-icons/bs";
import { IoVolumeHighOutline } from "react-icons/io5";
import { TbKeyframes } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";

import twist from "../assets/bannerTwi.png";

import Container from "./layer/Container";
import Flex from "./layer/Flex";
import ChatbotReusable from "./Chatbot/ChatbotReusable";
import ChatbotForm from "./Chatbot/ChatbotForm";
import ChatMessage from "./Chatbot/ChatMessage";


const Chatbot = () => {
  const [chatHistory, setChatHistory]= useState([]);
  const generateBotResponse = (history) =>{
    console.log(history);
    
  }
  return (
    <>
      <div className="my-20 bg-linear-to-r/hsl from-[#103571] to-[#014FCD]">
        <Container className="py-10">
          <div className="mb-15">
            <h4 className="font-Questrial font-normal text-lg sm:text-2xl leading-4.5 sm:leading-6 tracking-tighter text-[#FCE38A]">
              Live Ai Coach
            </h4>
            <h2 className="mt-5 font-Questrial font-normal text-3xl sm:text-5xl md:text-6xl leading-11 sm:leading-18 tracking-tighter text-white">
              Take a Suggestion Coaching
            </h2>
          </div>
          <div className="lg:flex">
            <div className="lg:w-[63%] mb-6 lg:mr-4 xl:mr-6 flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-175 xl:w-201 sm:mr-4 xl:mr-6 overflow-hidden rounded-xl border border-[#CDCDCD]">
                {/* Chatbot Header */}
                <div className="pt-4 pb-6 bg-white">
                  <h3 className="ml-8 font-Manrope font-bold text-lg leading-5.5 text-[#1B1B1B]">
                    AI Sales Coach
                  </h3>
                </div>
                {/* Chatbot Body */}
                <div className="h-81.75 xl:h-90.5 py-4 sm:py-6 px-3 sm:px-6 overflow-auto scroll-smooth bg-[#F2F3F3]">
                  <Flex className="flex-col justify-between gap-4">
                    <Flex className="justify-start">
                      <Link>
                        <img className="w-10 h-10 rounded-[41px] bg-[#D9D9D9]" src={twist} alt="bannerTwi.png" />
                      </Link>
                      <div className="max-w-[80%] ml-5 py-2 px-6 rounded-lg bg-white">
                        <p className="font-Poppins font-normal text-sm lg:text-[15px] leading-6 text-[#181818]">
                          Hello! I'm your AI sales coach. How can I help you improve your sales performance today?
                        </p>
                      </div>
                    </Flex>
                    
                    {/* Render the chat history dynamically */}
                    {chatHistory.map((chat, index) => (
                     <ChatMessage key={index} chat={chat}/>
                    ))}
                  </Flex>
                </div>
                {/* Chatbot Footer */}
                <div className="pt-4 px-7.5 pb-6 bg-white">
                  <div className="flex flex-wrap items-center gap-1 xl:gap-3.75">
                    <ChatbotReusable text="How do I handle objections?" />
                    <ChatbotReusable text="Give me a cold email template" />
                    <ChatbotReusable text="Negotiation tips" />
                    <ChatbotReusable text="Closing techniques" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <ChatbotForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-18 h-18 sm:h-82 mt-5 sm:mt-0 py-6 sm:py-0 rounded-[57px] border border-[#4e4e4e1a] bg-[#F2F3F3]">
                <ul className="flex flex-row sm:flex-col items-center justify-around">
                  <li className="sm:my-5.25">
                    <Link><LuRefreshCw className="text-2xl" /></Link>
                  </li>
                  <li className="sm:my-5.25">
                    <Link><FaRegThumbsUp className="text-2xl" /></Link>
                  </li>
                  <li className="sm:my-5.25">
                    <Link><FaRegThumbsDown className="text-2xl" /></Link>
                  </li>
                  <li className="sm:my-5.25">
                    <Link><FaRegClipboard className="text-2xl" /></Link>
                  </li>
                  <li className="sm:my-5.25">
                    <Link><IoVolumeHighOutline className="text-2xl" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[35%]">
                <div className="w-full px-5 py-8.5 xl:p-7.5 rounded-[20px] bg-[#EFEFEF]">
                    <h2 className="font-Manrope font-bold text-2xl sm:text-[32px] leading-6 sm:leading-8 text-[#323232]">Real-time Analysis</h2>
                    <div className="py-4 px-3 my-5 rounded-lg border border-[#E7E7E7] bg-white">
                        <div className="mb-3 flex items-center">
                            <FaCheckCircle className="w-4.75 h-4.75 mr-1 text-[#06B217]" />
                            <h3 className="font-Manrope font-semibold text-lg leading-6 text-[#171D25]">Confidence Level</h3>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full h-2 mr-2 rounded-sm bg-[#DFDFDF]">
                            <div className="w-46 sm:w-110 lg:w-41 xl:w-51.25 h-2 rounded-sm bg-[#44D618]"></div>
                          </div>
                          <p className="font-Poppins font-normal text-xs text-[#6D6D6D]">60%</p>
                        </div>
                    </div>
                    <div className="py-4 px-3 rounded-lg border border-[#E7E7E7] bg-white">
                        <div className="mb-3 flex items-center">
                            <TbKeyframes className="w-4.75 h-4.75 mr-1" />
                            <h3 className="font-Manrope font-semibold text-lg leading-6 text-[#171D25]">Confidence Level</h3>
                        </div>
                        <div className="">
                            <p className="font-Poppins font-normal text-sm xl:text-base leading-5 xl:leading-6 text-[#909090]">85% improvement in objection handling</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 xl:mt-6 w-full px-5 py-7.5 xl:p-7.5 p-7.5 rounded-[20px] bg-[#EFEFEF]">
                    <h2 className="font-Manrope font-bold text-2xl sm:text-[32px] leading-6 sm:leading-8 text-[#323232]">Quick Actions</h2>
                    <div className="mt-5 flex justify-between">
                        <div className="w-full h-28 mr-1 xl:mr-2 p-4 rounded-xl border border-[#E7E7E7] bg-white">
                            <Link className="inline-block">
                             <BsFileEarmarkTextFill className="text-2xl text-[#002868]"/>
                            </Link>
                            <h3 className="mt-2 font-Manrope font-semibold text-[15px] sm:text-lg lg:text-[15px] xl:text-lg leading-6 xl:leading-8 text-[#171D25]">Generate Script</h3>
                        </div>
                        <div className="w-full h-28 ml-1 xl:ml-2 p-4 rounded-xl border border-[#E7E7E7] bg-white">
                            <Link className="inline-block">
                             <BsChatTextFill className="text-2xl text-[#002868]"/>
                            </Link>
                            <h3 className="mt-2 font-Manrope font-semibold text-[15px] sm:text-lg lg:text-[15px] xl:text-lg leading-6 xl:leading-8 text-[#171D25]">Practice Pitch</h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Chatbot;
