"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const experience = () => {
  return (
    <div className="p-10 m-10">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time> 06 May, 2022 - 06 July, 2022</Timeline.Time>
            <Timeline.Title>Summer Research Fellowship - 2022</Timeline.Title>
            <Timeline.Body>
              Research on Hyperledger Fabric Under Prof.R.K Shyamsundar at IIT
              Bombay.
            </Timeline.Body>
            {/* <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button> */}
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>12 June, 2023 - 26 December, 2023</Timeline.Time>
            <Timeline.Title>
              Incresco Technology Solutions Pvt Ltd.
            </Timeline.Title>
            <Timeline.Body>
              As an SDE Intern, I oversee and maintain core web services and
              websites, write well-designed and efficient code by using the best
              software development practices, and collaborate with senior
              developers to update the website and create new features
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>26 Decemeber 2023 - 6 January 2024</Timeline.Time>
            <Timeline.Title>SM Exports</Timeline.Title>
            <Timeline.Body>
              I worked on a freelancing project to develop an e-commerce
              website, using Next.js for the frontend and Storyblok as the CMS.
              The site, designed for optimal user experience, was built entirely
              in Tailwind CSS..
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>6 January 2024 - 6 Febuaray 2024</Timeline.Time>
            <Timeline.Title>Fluffy Town</Timeline.Title>
            <Timeline.Body>
              I worked on a freelancing project to develop an e-commerce
              website, using Next.js for the frontend and Shopify.
              The site, designed for optimal user experience, was built entirely
              in Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default experience;
