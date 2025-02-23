import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";
import { motion } from "framer-motion";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="block sm:flex sm:gap-10 mt-10 sm:mt-20 items-center"
    >
      {/* Profile Image Section */}
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center lg:h-[400px]">
        <Image
          src="/images/profile-1.jpeg"
          width={250}
          height={350}
          className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl  border-transparent hover:border-primary"
          alt="Profile Image"
        />
      </div>

      {/* About Me Text Section */}
      <div className="font-general-regular w-full sm:w-3/4 text-left bg-secondary-light dark:bg-ternary-dark p-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          About Me
        </h2>
        {aboutMe.map((bio) => (
          <motion.p
            className="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            key={bio.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: bio.id * 0.2 }}
          >
            {bio.bio}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default AboutMeBio;
