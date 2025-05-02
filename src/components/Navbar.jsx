import React, { useState } from "react";
import Logo from "../assets/Logo.png";

import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import Container from "../layer/Container";
import Flex from "../layer/Flex";

const Navbar = () => {
  let [ show, setShow ] = useState(false);
  return (
    <>
      <Container className="py-7.5">
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-18.5">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              {/* <div className="lg:w-3xl xl:w-5xl text-center lg:flex items-center justify-between"></div> */}
              <ul className="flex gap-8">
                <li><NavLink to="/" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Home</NavLink></li>
                <li><NavLink to="/about" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">About</NavLink></li>
                <li><NavLink to="/pricing" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Pricing</NavLink></li>
                <li><NavLink to="/consulting" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Consulting</NavLink></li>
                <li><NavLink to="/coach" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Ai Coach</NavLink></li>
              </ul>
            </div>
            <div>
              <button className="py-2.5 lg:py-3 px-6 lg:px-8.5 border border-button-black rounded-full cursor-pointer font-Manrope font-semibold lg:font-bold  text-sm lg:text-base leading-5.5 tracking-tighter text-button-black">Gat Started</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Part */}

        <div className="block lg:hidden">
          <Flex className="items-center justify-between">
            <div className="flex items-center space-x-18.5">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              {/* <div className="lg:w-3xl xl:w-5xl text-center lg:flex items-center justify-between"></div> */}
              <div className={ `lg:w-3xl xl:w-5xl text-center lg:flex items-center justify-between bg-white absolute lg:static ${ show == true ? 'top-[105px] left-[0px] w-full text-center pb-5 duration-700 z-10 ' : 'top-[-264px] left-[0px] w-full text-center duration-700 -z-10' }` }>
                <ul className="lg:flex gap-8">
                  <li className="my-4 lg:my-0"><NavLink to="/" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Home</NavLink></li>
                  <li className="my-4 lg:my-0"><NavLink to="/about" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">About</NavLink></li>
                  <li className="my-4 lg:my-0"><NavLink to="/pricing" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Pricing</NavLink></li>
                  <li className="my-4 lg:my-0"><NavLink to="/consulting" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Consulting</NavLink></li>
                  <li className="my-4 lg:my-0"><NavLink to="/coach" className="font-Jakarta font-semibold text-sm leading-3.5 text-menu-black">Ai Coach</NavLink></li>
                </ul>
                <div>
                  <button className="py-2.5 lg:py-3 px-6 lg:px-8.5 border border-button-black rounded-full cursor-pointer font-Manrope font-semibold lg:font-bold  text-sm lg:text-base leading-5.5 tracking-tighter text-button-black">Gat Started</button>
                </div>
              </div>
            </div>
            <div className="block lg:hidden relative" onClick={() => {setShow(!show)}}>
              {show == true ? <RxCross2 /> : <FaBars />}
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
