import React from "react";
import { Link } from "react-router-dom";

const ChatbotReusable = ({text}) => {
  return (
    <>
      <Link className="py-2 px-3 rounded-[36px] bg-[#00286814]">
        <h4 className="font-Poppins font-normal text-xs leading-3.5 tracking-[-4%] text-[#002868]">
          {text}
        </h4>
      </Link>
    </>
  );
};

export default ChatbotReusable;
