import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import Container from "../layer/Container";

const Footer = () => {
  return (
    <>
      <Container className="mt-20 mb-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[38%] mb-8 lg:mb-0">
            <div className="w-full">
              <Link>
                <img src={Logo} alt="Logo.png" />
              </Link>
              <div className="my-7.5">
                <p className="font-Manrope font-normal text-sm leading-6 text-[#335386]">
                  SalesRank.AI offers a comprehensive suite of AI-powered
                  solutions to help you find expert sales professionals who can
                  elevate every aspect of your business. From performance
                  rankings and skill verification to industry benchmarking and
                  real-time analytics, we provide the insights and tools to
                  optimize your sales strategy and drive growth.
                </p>
              </div>
              <div>
                <ul className="flex items-center gap-2">
                  <li className="group">
                    <Link className="w-7 h-7 rounded-full bg-[#EDEDED] group-hover:bg-[#335386] flex items-center justify-center">
                      <FaFacebookF className="text-xl text-[#335386] group-hover:text-white" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="w-7 h-7 rounded-full bg-[#EDEDED] group-hover:bg-[#335386] flex items-center justify-center">
                      <FaTwitter className="text-xl text-[#335386] group-hover:text-white" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="w-7 h-7 rounded-full bg-[#EDEDED] group-hover:bg-[#335386] flex items-center justify-center">
                      <FaLinkedinIn className="text-xl text-[#335386] group-hover:text-white" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="w-7 h-7 rounded-full bg-[#EDEDED] group-hover:bg-[#335386] flex items-center justify-center">
                      <FaInstagram className="text-xl text-[#335386] group-hover:text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
           <div className="flex flex-wrap justify-between">
            <div className="w-28 hidden sm:block">
              <h2 className="font-Manrope font-semibold text-lg leading-4.5 tracking-[-1%] text-[#001C4A]">Navigation :</h2>
              <div className="mt-6">
                <ul>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Service</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Agency</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Case Study</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Resource</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-24">
             <h2 className="font-Manrope font-semibold text-lg leading-4.5 tracking-[-1%] text-[#001C4A]">License :</h2>
             <div className="mt-6">
                <ul>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Privacy Policy</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Copyright</Link></li>
                    <li className="my-2.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386]">Email Address</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-60">
             <h2 className="font-Manrope font-semibold text-lg leading-4.5 tracking-[-1%] text-[#001C4A]">Contact :</h2>
             <div className="mt-6">
                <ul>
                    <li className="my-5.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386] flex items-center"><FaPhone className="mr-1.5" /> +880 1722365626</Link></li>
                    <li className="my-5.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386] flex items-center"><MdEmail className="mr-1.5" /> parvez.devp@gmail.com</Link></li>
                    <li className="my-5.5"><Link className="font-Manrope font-normal text-sm leading-3.5 text-[#335386] flex items-center"><FaMapMarkerAlt className="mr-1.5" /> Equria, South Keranigonj-1311</Link></li>
                </ul>
              </div>
            </div>
           </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
