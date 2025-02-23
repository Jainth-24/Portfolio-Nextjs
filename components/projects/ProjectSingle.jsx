import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectSingle = ({ id, img, title, category, status }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link href={`/projects/${id}`} aria-label="Single Project" passHref>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={img}
              className="rounded-t-xl border-none"
              alt="Single Project"
              layout="responsive"
              width={155}
              height={100}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light block">
              {category}
            </span>

            {/* Status Badge */}
            <span
              className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full ${
                status === "Delivered"
                  ? "bg-violet-600 text-white" // Deep violet for delivered status
                  : "bg-violet-400 text-white" // Softer violet for in-progress
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
