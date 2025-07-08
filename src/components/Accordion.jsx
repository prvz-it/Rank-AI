import React from "react";
import Container from "./layer/Container";
import AccordionReusable from "./reusable/AccordionReusable";

const Accordion = () => {

     
  return (
    <>
      <Container className="my-20">
        <div className="w-80 sm:w-150 lg:w-248 mx-auto text-center">
          <h2 className="font-Questrial font-normal text-3xl sm:text-[34px] lg:text-6xl leading-10 lg:leading-18 tracking-[-1%] text-[#111111]">Constant collaboration is how we roll. Let's see if we are a good fit.</h2>
        </div>
        <div className="mt-15">
            <div className="">
                <AccordionReusable id="01" title="Why should I choose Hematic?" text="Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back"/>
                <AccordionReusable id="02" title="I like your works, how do we start a project?" text="Mice at the bottleneck My capacity is filled, and we need to start using helicopter views or social media to advertise because we don't have any incentives. Are there any leftovers in the kitchen? Let's add a pin to indicate that we need to build it so that it scales. You can't win the loop back if you're not hurting."/>
                <AccordionReusable id="03" title="What info is required to get a quotation?" text="Mice at bottlenecks My capacity is at capacity, and we need to start promoting on social media or using helicopter views for incentives. Let's add that we must construct it to scale. Do you have any leftovers from the kitchen? You cannot win loop back if you are not in pain."/>
            </div>
        </div>
      </Container>
    </>
  );
};

export default Accordion;
