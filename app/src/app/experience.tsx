import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
const data = [
  {
    title: "2024 - Present",
    content: (
      <div>
        <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
          Aayan Infotech Pvt Ltd
        </h2>
        <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
          Software Developer
        </h6>

        <div className="flex">
          <ul className="list-disc w-full flex flex-col gap-3">
            <li className="text-lg lg:text-xl">
              Developed scalable MERN stack applications with 30+ RESTful APIs
              implementing JWT authentication, role-based access control,
              input validation, and rate limiting.
            </li>

            <li className="text-lg lg:text-xl">
              Integrated Stripe and Razorpay payment gateways with webhook
              handling for payment verification, subscription management, and
              automated billing workflows.
            </li>

            <li className="text-lg lg:text-xl">
              Implemented LLM integrations using OpenAI and Claude APIs for
              chatbot functionality, content generation, and automated
              responses, reducing support workload by 40%.
            </li>

            <li className="text-lg lg:text-xl">
              Optimized database queries and implemented Redis caching,
              reducing API response time by 50% and improving application
              performance.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "2023 - 2024",
    content: (
      <div>
        <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
          Duplex Technologies Services Pvt Ltd
        </h2>

        <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
          Software Developer
        </h6>

        <div className="flex">
          <ul className="list-disc w-full flex flex-col gap-3">
            <li className="text-lg lg:text-xl">
              Built full-stack MERN applications with authentication systems,
              file uploads using Multer and Cloudinary, and real-time features
              using Socket.io.
            </li>

            <li className="text-lg lg:text-xl">
              Integrated Stripe and Razorpay APIs for payment processing,
              invoice generation, and subscription billing across multiple
              client projects.
            </li>

            <li className="text-lg lg:text-xl">
              Developed responsive React.js applications using Redux Toolkit
              and TanStack Query integrated with backend APIs for 10+
              production applications.
            </li>

            <li className="text-lg lg:text-xl">
              Collaborated with cross-functional teams to deliver scalable
              solutions while maintaining clean, reusable, and efficient
              codebases.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "2022 -2023",
    content: (
      <div>
        <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
          Augurs Technologies
        </h2>

        <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
          Software Developer
        </h6>

        <div className="flex">
          <ul className="list-disc w-full flex flex-col gap-3">
            <li className="text-lg lg:text-xl">
              Developed responsive web applications using React.js for multiple
              client projects with a strong focus on performance and user
              experience.
            </li>

            <li className="text-lg lg:text-xl">
              Collaborated with backend teams to implement frontend interfaces
              integrated with RESTful APIs and MongoDB-based systems.
            </li>

            <li className="text-lg lg:text-xl">
              Built reusable UI components and ensured cross-browser
              compatibility to provide a consistent user experience.
            </li>

            <li className="text-lg lg:text-xl">
              Gained hands-on experience with modern frontend development
              practices, API integration, and production deployment workflows.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
  return (
    <>
      <div className="w-full text-change" id="experience">
        <Timeline data={data} />
      </div>
    </>
  );
}
