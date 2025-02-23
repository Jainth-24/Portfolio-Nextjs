import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "SM Exports Ecommerce",
    url: "https://smexports-eta.vercel.app/",
    category: "Web Application",
    status: "Delivered",
    img: "/images/SM-exports.png",
    ProjectHeader: {
      title: "SM Exports",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/SM-exports1.png",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/SM-exports2.png",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/SM-exports3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "SM Exports",
        },
        {
          id: uuidv4(),
          title: "Activity",
          details: "Growing of crops; market gardening; horticulture",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://smexports-eta.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create an engaging and user-friendly e-commerce website using Storyblok and Next.js, allowing customers to easily browse and select products. The website should provide a seamless inquiry process via email, ensuring a smooth user experience. Additionally, the website should be mobile responsive to cater to a wide range of users.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Nextjs", "TailwindCSS", "JavaScript", "Storyblok"],
        },
      ],
      ProjectDetailsHeading: "Product Details",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The objective of this project is to develop a fully functional e-commerce website using Storyblok and Next.js. The website will allow customers to browse a variety of products and easily select items for purchase. Additionally, customers will be able to inquire about products through an email inquiry feature, providing a seamless communication channel between customers and the business. The website will be designed to be mobile responsive, ensuring optimal user experience across different devices.",
        },
        {
          id: uuidv4(),
          details:
            "Key Features:\n1. Product Catalog: Display a range of products with detailed descriptions and images.\n2. Product Selection: Allow customers to select products and add them to a cart for checkout.\n3. Email Inquiry: Provide a form for customers to submit inquiries about specific products via email.\n4. Mobile Responsiveness: Ensure the website is optimized for mobile devices to provide a consistent user experience.\n5. User Authentication: Implement user authentication to allow registered users to save their cart and track orders.\n6. Admin Dashboard: Include an admin dashboard to manage products, view inquiries, and track orders.\n7. Payment Gateway Integration: Integrate a payment gateway to facilitate secure online transactions.\n8. SEO Optimization: Optimize the website for search engines to improve visibility and attract more organic traffic.",
        },
        {
          id: uuidv4(),
          details:
            "Technologies Used:\n- Storyblok: Content management system for managing website content.\n- Next.js: React framework for building the front-end of the website.\n- Node.js: Back-end server environment for handling server-side logic.\n- Express: Web application framework for Node.js, used for building the back-end API.\n- MongoDB: NoSQL database for storing product information, user data, and inquiries.\n- SMTP Server: To handle email inquiries and notifications.",
        },
        {
          id: uuidv4(),
          details:
            "Outcome:\nThe project aims to deliver a robust and user-friendly e-commerce website that meets the needs of both customers and the business. The website will provide a seamless shopping experience, encourage customer engagement through inquiries, and ultimately drive sales for the business.\n\nTimeline:\nThe project is estimated to be completed in 2 weeks , including design, development, testing, and deployment phases.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Fluffy Town",
    category: "Web Application",
    status: "Delivered",
    img: "/images/fluffytown.png",
    ProjectHeader: {
      title: "Fluffy Town",
      publishDate: "Feb 14, 2024",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Fluffy Town",
        img: "/images/fluffytown1.png",
      },
      {
        id: uuidv4(),
        title: "Fluffy Town",
        img: "/images/fluffytown2.png",
      },
      {
        id: uuidv4(),
        title: "Fluffy Town",
        img: "/images/fluffytown3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Fluffy Town",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Import and Exports of Graments",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To develop a modern and efficient e-commerce website using Next.js and Tailwind CSS, integrated with Shopify for product management and Razorpay as a secure payment gateway. The website aims to provide a seamless shopping experience for customers, with a focus on user-friendly navigation, visually appealing design, and reliable payment processing. The integration with Shopify ensures easy management of products and inventory, while Razorpay ensures secure and hassle-free transactions. Overall, the project aims to deliver a high-quality e-commerce platform that meets the needs of both customers and the business.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "NextJs",
            "Shopify",
            "Razorpay",
            "Storefront",
            "TailwindCSS",
            "Mobile Responsive",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The objective of this project is to develop a modern and efficient e-commerce website using Next.js and Tailwind CSS, integrated with Shopify for product management and Razorpay as a secure payment gateway. The website aims to provide a seamless shopping experience for customers, with a focus on user-friendly navigation, visually appealing design, and reliable payment processing. The integration with Shopify ensures easy management of products and inventory, while Razorpay ensures secure and hassle-free transactions. Overall, the project aims to deliver a high-quality e-commerce platform that meets the needs of both customers and the business.",
        },
        {
          id: uuidv4(),
          details:
            "Key Features:\n1. Next.js and Tailwind CSS: Utilize these technologies for efficient and responsive front-end development.\n2. Shopify Integration: Integrate with Shopify to manage products, inventory, and orders.\n3. Razorpay Payment Gateway: Implement Razorpay for secure and reliable payment processing.\n4. User-Friendly Design: Focus on creating a visually appealing and easy-to-navigate website for a seamless shopping experience.\n5. Mobile Responsiveness: Ensure the website is optimized for mobile devices to reach a wider audience.\n6. Secure Transactions: Implement security measures to protect customer data and ensure secure transactions.",
        },
        {
          id: uuidv4(),
          details:
            "Technologies Used:\n- Next.js: React framework for building the front-end.\n- Tailwind CSS: Utility-first CSS framework for styling.\n- Shopify: E-commerce platform for product management.\n- Razorpay: Payment gateway for secure transactions.\n- Node.js: Back-end server environment for handling server-side logic.\n- Express: Web application framework for Node.js, used for building the back-end API.",
        },
        {
          id: uuidv4(),
          details:
            "Outcome:\nThe project aims to deliver a fully functional and user-friendly e-commerce website that provides a seamless shopping experience for customers. By integrating with Shopify and Razorpay, the website will offer efficient product management and secure payment processing. The website's design and functionality will be optimized for mobile devices, ensuring accessibility for a wide range of users. Overall, the project aims to meet the business goals of increasing sales and customer satisfaction.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "VVM Garments",
    url: "https://vvmgarments.netlify.app/",
    category: "Web Application",
    status: "Delivered",
    img: "/images/vvmgarments.png",
    ProjectHeader: {
      title: "VVM Garments",
      publishDate: "Jan 26, 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "VVM Garments",
        img: "/images/vvmgraments1.png",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/vvmgarments2.png",
      },
      {
        id: uuidv4(),
        title: "Kabul Project Management UI",
        img: "/images/vvmgarments3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VVM Garments",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Garments",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vvmgarments.netlify.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To develop a comprehensive e-commerce website using PHP, allowing clients to effectively sell their products online. The website will feature an intuitive user interface for clients to manage their products, track sales, and view analytics. The admin dashboard will provide easy product management capabilities, including adding new products, updating inventory, and monitoring sales performance. The primary goal of the project is to create a seamless platform for clients to showcase and sell their products, enhancing their online presence and boosting sales..",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "PHP"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The objective of this project is to develop a comprehensive e-commerce website using PHP, allowing clients to effectively sell their products online. The website will feature an intuitive user interface for clients to manage their products, track sales, and view analytics. The admin dashboard will provide easy product management capabilities, including adding new products, updating inventory, and monitoring sales performance. The primary goal of the project is to create a seamless platform for clients to showcase and sell their products, enhancing their online presence and boosting sales.",
        },
        {
          id: uuidv4(),
          details:
            "Key Features:\n1. Client Product Management: Provide clients with tools to add, update, and manage their products.\n2. Sales Tracking: Implement features to track sales, view order history, and generate reports.\n3. Admin Dashboard: Develop an admin dashboard for easy product management, inventory tracking, and sales analytics.\n4. User-friendly Interface: Create an intuitive and responsive user interface for clients and admin users.\n5. Security Measures: Implement security features to protect client and user data, and ensure secure transactions.\n6. Scalability: Design the website to be scalable, allowing for future growth and expansion.",
        },
        {
          id: uuidv4(),
          details:
            "Technologies Used:\n- PHP: Server-side scripting language for web development.\n- MySQL: Relational database management system for data storage.\n- HTML/CSS: Front-end technologies for designing the user interface.\n- JavaScript: Programming language for client-side interactions and dynamic content.\n- Bootstrap: Front-end framework for responsive design.\n- Apache: Web server software for hosting the website.\n- AdminLTE: Admin dashboard template for designing the admin interface.",
        },
        {
          id: uuidv4(),
          details:
            "Outcome:\nThe project aims to deliver a robust e-commerce website that meets the needs of clients looking to sell their products online. The website will provide clients with an easy-to-use platform to showcase their products, manage inventory, and track sales. The admin dashboard will offer comprehensive tools for managing products, tracking sales performance, and generating reports. Overall, the project aims to enhance clients' online presence and boost their sales through an efficient and user-friendly e-commerce platform.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "ECRON",
    url: "https://erconksa.com/",
    category: "Web Application",
    status: "Delivered",
    img: "/images/Ercon-3.png",
    ProjectHeader: {
      title: "ECRON",
      publishDate: "Feb 22, 2025",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "ECRON Home Page",
        img: "/images/Ecron-1.png",
      },
      {
        id: uuidv4(),
        title: "ECRON Projects Page",
        img: "/images/Ecron-2.png",
      },
      {
        id: uuidv4(),
        title: "ECRON Contact Page",
        img: "/images/Ercon-3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "ECRON",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Construction and Engineering",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://erconksa.com/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a modern and responsive portfolio website for ECRON using Next.js and Tailwind CSS. The website should reflect the company's professionalism and showcase their projects, career opportunities, and contact information. The design and functionality should align with the client's preferences, ensuring a seamless user experience across all devices.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next.js", "TailwindCSS", "JavaScript"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The objective of this project is to develop a modern and responsive portfolio website for ECRON using Next.js and Tailwind CSS. The website should effectively showcase the company's projects, career opportunities, and contact information. The design and functionality should align with the client's preferences, ensuring a seamless user experience across all devices.",
        },
        {
          id: uuidv4(),
          details:
            "Key Features:\n1. Home Page: A visually appealing landing page that introduces the company and its services.\n2. Projects Page: A dedicated section to showcase ECRON's completed and ongoing projects.\n3. Careers Page: A page to list job openings and career opportunities within the company.\n4. About Us Page: Information about the company's history, mission, and values.\n5. Contact Page: A form for visitors to get in touch with ECRON.\n6. Responsive Design: Ensure the website is fully responsive and optimized for all devices.",
        },
        {
          id: uuidv4(),
          details:
            "Technologies Used:\n- Next.js: React framework for building the front-end.\n- Tailwind CSS: Utility-first CSS framework for styling.\n- JavaScript: Programming language for client-side interactions.\n- Vercel: Deployment platform for hosting the website.",
        },
        {
          id: uuidv4(),
          details:
            "Outcome:\nThe project aims to deliver a professional and responsive portfolio website that effectively showcases ECRON's projects and services. The website will provide a seamless user experience, aligning with the client's preferences and enhancing their online presence.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Little Beez",
    url: "https://little-beez.vercel.app/",
    category: "Web Application",
    status: "In Progress",
    img: "/images/littlebeez-3.png",
    ProjectHeader: {
      title: "Little Beez",
      publishDate: "In Progress",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Little Bees Home Page",
        img: "/images/littlebeez-1.png",
      },
      {
        id: uuidv4(),
        title: "Little Bees About Page",
        img: "/images/littlebeez-2.png",
      },
      {
        id: uuidv4(),
        title: "Little Bees Contact Page",
        img: "/images/littlebeez-3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Little Bees",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Childcare and Education",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://little-beez.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To develop a visually appealing and user-friendly portfolio website for Little Bees using Next.js (TypeScript) and Tailwind CSS. The website should reflect the client's brand identity and provide information about their services, mission, and contact details. The design should be based on the client's preferences, ensuring a seamless and engaging user experience.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next.js", "TypeScript", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The objective of this project is to create a visually appealing and user-friendly portfolio website for Little Bees using Next.js (TypeScript) and Tailwind CSS. The website should effectively communicate the client's brand identity and provide information about their services, mission, and contact details. The design should align with the client's preferences, ensuring a seamless and engaging user experience.",
        },
        {
          id: uuidv4(),
          details:
            "Key Features:\n1. Home Page: A welcoming landing page that introduces Little Bees and their services.\n2. About Us Page: Information about the company's mission, values, and team.\n3. Why Us Page: A section highlighting the unique aspects of Little Bees' services.\n4. Contact Page: A form for visitors to get in touch with Little Bees.\n5. Responsive Design: Ensure the website is fully responsive and optimized for all devices.",
        },
        {
          id: uuidv4(),
          details:
            "Technologies Used:\n- Next.js: React framework for building the front-end.\n- TypeScript: Programming language for type-safe development.\n- Tailwind CSS: Utility-first CSS framework for styling.\n- Hostinger: Deployment platform for hosting the website.",
        },
        {
          id: uuidv4(),
          details:
            "Outcome:\nThe project aims to deliver a visually appealing and user-friendly portfolio website that effectively communicates Little Bees' brand identity and services. The website will provide a seamless user experience, aligning with the client's preferences and enhancing their online presence.",
        },
      ],
    },
  },
];
