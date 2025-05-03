import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import Container from "../layer/Container";
import Flex from "../layer/Flex";

const Navbar = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <div className="hidden lg:block">
          <Flex className="items-center justify-between bg-white py-7.5">
            <Flex className="items-center space-x-18.5">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <ul className="flex gap-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => 
                      `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                        isActive ? "active" : "hover:text-[#000000aa]"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => 
                      `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                        isActive ? "active" : "hover:text-[#000000aa]"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) => 
                      `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                        isActive ? "active" : "hover:text-[#000000aa]"
                      }`
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/consulting"
                    className={({ isActive }) => 
                      `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                        isActive ? "active" : "hover:text-[#000000aa]"
                      }`
                    }
                  >
                    Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coach"
                    className={({ isActive }) => 
                      `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                        isActive ? "active" : "hover:text-[#000000aa]"
                      }`
                    }
                  >
                    Ai Coach
                  </NavLink>
                </li>
              </ul>
            </Flex>
            <div>
              <button className="py-3 px-8.5 bg-white border border-button-black rounded-full cursor-pointer font-Manrope font-bold text-base leading-5.5 tracking-tighter text-button-black">
                Gat Started
              </button>
            </div>
          </Flex>
        </div>

        {/* Mobile Menu Part */}

        <div className="block lg:hidden">
          <div className="relative z-20">
            <Flex className="items-center justify-between py-3 bg-white">
              <Flex className="items-center space-x-18.5">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
                <div
                  className={`w-full py-6 bg-linear-to-r/hsl from-[#103571] to-[#014FCD] text-center absolute ${
                    show == true ? "top-13 left-0 duration-700 -z-10" : "-top-88 left-0 duration-700 -z-10"
                  }`}
                >
                  <ul className="">
                    <li className="my-4">
                      <NavLink
                        to="/"
                        className={({ isActive }) => 
                          `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                            isActive ? "active" : "hover:text-[#000000aa]"
                          }`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="my-4">
                      <NavLink
                        to="/about"
                        className={({ isActive }) => 
                          `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                            isActive ? "active" : "hover:text-[#000000aa]"
                          }`
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="my-4">
                      <NavLink
                        to="/pricing"
                        className={({ isActive }) => 
                          `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                            isActive ? "active" : "hover:text-[#000000aa]"
                          }`
                        }
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li className="my-4">
                      <NavLink
                        to="/consulting"
                        className={({ isActive }) => 
                          `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                            isActive ? "active" : "hover:text-[#000000aa]"
                          }`
                        }
                      >
                        Consulting
                      </NavLink>
                    </li>
                    <li className="my-4">
                      <NavLink
                        to="/coach"
                        className={({ isActive }) => 
                          `font-Jakarta font-semibold text-sm leading-3.5 text-menu-black ${
                            isActive ? "active" : "hover:text-[#000000aa]"
                          }`
                        }
                      >
                        Ai Coach
                      </NavLink>
                    </li>
                  </ul>
                  <div className="">
                    <button className="py-2.5 px-6 bg-white border border-button-black rounded-full cursor-pointer font-Manrope font-semibold  text-sm leading-5.5 tracking-tighter text-button-black">
                      Gat Started
                    </button>
                  </div>
                </div>
              </Flex>
              <div
                className="block lg:hidden cursor-pointer relative"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show == true ? <RxCross2 /> : <FaBars />}
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
