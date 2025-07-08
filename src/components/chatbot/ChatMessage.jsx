import React from "react";
import { Link } from "react-router-dom";
import Flex from "../layer/Flex";

import twist from "../../assets/bannerTwi.png"

const ChatMessage = ({chat}) => {
  return (
    <>
      <Flex className={`justify-start ${chat.role === "model" ? 'bot' : 'user' }`}>
        <div className="max-w-[80%] mr-5 py-2 px-6 rounded-lg bg-white">
          <p className="font-Poppins font-normal text-sm lg:text-[15px] leading-6 text-[#181818]">
            {chat.text}
          </p>
        </div>
        <Link>
          <img
            className="w-10 h-10 rounded-[41px] bg-[#D9D9D9]"
            src={twist}
            alt="bannerTwi.png"
          />
        </Link>
      </Flex>
    </>
  );
};

export default ChatMessage;
