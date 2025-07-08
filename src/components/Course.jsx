import React from "react";

import Course01 from "../assets/Course01.png";
import Course02 from "../assets/Course02.png";

import CourseReusable from "./reusable/CourseReusable";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

const Course = () => {
  return (
    <>
      <Container>
        <div>
          <Flex className="mb-12 items-center sm:items-end justify-between">
            <div className="w-60 sm:w-125 md:w-xl lg:w-3xl xl:w-5xl">
              <h2 className="font-Manrope font-semibold text-3xl sm:text-4xl xl:text-5xl leading-13 lg:leading-18 text-[#262626]">
                Our Courses
              </h2>
              <p className="hidden sm:block font-Manrope font-normal text-base xl:text-lg leading-6.75 text-[#59595A]">
                Lorem ipsum dolor sit amat consectetur. Tempus tincidunt team egest edit id impedient et. Cars eu sit dignissim lorem nibs et. Ac cum eger habitats in veldt fringier fuegian selectus in.
              </p>
            </div>
            <div>
              <button className="py-4.5 px-6 rounded-lg cursor-pointer bg-[#002868] font-Manrope font-medium text-base xl:text-lg leading-6.75 text-white">
                View All
              </button>
            </div>
          </Flex>
          <Flex className="flex-col sm:flex-row justify-between">
            <CourseReusable Img={Course01} intoLeft="4 Weeks" intoRight="Beginner" name="By John Smith" title="Web Design Fundamentals" para="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." button="Get it Now"/>
            <CourseReusable Img={Course02} intoLeft="4 Weeks" intoRight="Beginner" name="By John Smith" title="Web Design Fundamentals" para="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." button="Get it Now"/>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Course;
