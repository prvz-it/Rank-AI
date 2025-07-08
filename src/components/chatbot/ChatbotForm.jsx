import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ChatbotForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user's message:
    setChatHistory((history) => [...history,{ role: "user", text: userMessage }]);

    // Add a "Thinking..." placeholder for the bot's response:
    setTimeout(() => {
      setChatHistory((history) => [...history,{ role: "user", text: "Thinking..." }])
      generateBotResponse([...chatHistory, { role: "user", text: userMessage }])
    }, 600)
  };

  return (
    <>
      <form
        action="#"
        className="max-w-full flex items-center"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Ask anything you need ..."
          className="w-156 h-12 px-6 rounded-lg border border-[#E5E7EB] transition-all duration-300 ease-in-out bg-[#ffffff3d] placeholder:font-Manrope placeholder:font-normal placeholder:text-sm leading-3.5 placeholder:tracking-[-4%] placeholder:text-[#9A9A9A] focus-within:text-[#002868]"
        />
        <button className="ml-3 flex items-center justify-between p-3 sm:p-3.5 rounded-lg cursor-pointer bg-[#002868] font-Poppins font-medium text-sm sm:text-[17px] leading-4.25 tracking-[-4%] text-white">
          Send
          <FaArrowUp className="ml-1.5 text-white" />
        </button>
      </form>
    </>
  );
};

export default ChatbotForm;
