// components/Marquee.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { navbar } from '@/constants';

const Marquee = ({ isVisible }) => {
  return (
    <motion.div
      className="bg-primary flex items-center  text-white overflow-hidden text-xs"
      initial={{ height: 32 }}
      animate={{ height: isVisible ? 32 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="whitespace-nowrap py-2 text-base font-[500] antialiased "
       
        animate={{
          x: ["180%", "-120%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
       {navbar.scrollMessage}
      </motion.div>
    </motion.div>
  );
};

export default Marquee;
