import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas"; // Ensure this component exists
import { SectionWrapper } from "../hoc"; // Ensure this component exists
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >

        <h3 className={styles.sectionHeadText}>Arjun Jain</h3>

        <div className="mt-8 flex flex-col gap-4">
          <div>
          <p className={styles.sectionSubText}> Email: </p>
            <a
              href="mailto:arjunjain2892003@gmail.com"
              className="text-secondary"
            >
               arjunjain2892003@gmail.com
            </a>
          </div>

          <div>
          <p className={styles.sectionSubText}> Phone: </p>
            <a href="tel:+917007034266" className="text-secondary">
              +91 7007034266
            </a>
          </div>

          <div>
          <p className={styles.sectionSubText}> Leetcode: </p>
            <a
              href="https://leetcode.com/u/arjun28jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://leetcode.com/u/arjun28jain/
            </a>
          </div>

          <div>
          <p className={styles.sectionSubText}> Github: </p>
            <a
              href="https://github.com/arjun28jain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://github.com/arjun28jain
            </a>
          </div>

          <div>
          <p className={styles.sectionSubText}> Instagram: </p>
            <a
              href="https://www.instagram.com/arjun28jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://www.instagram.com/arjun28jain/
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
