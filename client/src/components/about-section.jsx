import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, GraduationCap, Users, Award } from "lucide-react";

import { about } from "../constants";
// Mock data for college officials - replace with your actual data



const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
    opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Create duplicated array for seamless loop
  const duplicatedOfficials = [...about.collegeOfficials, ...about.collegeOfficials];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0  bg-primary/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Discover our legacy of excellence and innovation
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto space-y-16"
        >
          {/* Content Cards Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 flex flex-col">
              {/* Event Card */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Our Event
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {about.description}
                  </p>
                </div>
              </div>

              {/* College Card */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Our Institution
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {about.CollegeDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Campus Image */}
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="  h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={about.image}
                  alt="College Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Campus Info Overlay */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                  <h4 className="text-white font-bold text-xl sm:text-2xl mb-2">{about.imageTitle}</h4>
                  <p className="text-gray-200 text-sm sm:text-base">{about.imageSubtitle}</p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 mt-4">
                    <div className="flex items-center text-white/90">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-xs sm:text-sm font-medium">{about.students}</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="text-xs sm:text-sm font-medium">{about.programs}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* College Officials Marquee Section */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Leadership
              </h3>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto rounded-full"></div>
            </div>

            {/* Infinite Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {duplicatedOfficials.map((official, index) => (
                  <div
                    key={`${official.id}-${index}`}
                    className="inline-block mx-3 sm:mx-4 lg:mx-6 group"
                  >
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[200px] sm:min-w-[240px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-purple-400/30 group-hover:ring-purple-400/60 transition-all duration-300">
                          <img
                            src={official.image}
                            alt={official.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-white font-semibold text-sm sm:text-base mb-1 leading-tight">
                          {official.name}
                        </h4>
                        <p className="text-purple-300 text-xs sm:text-sm font-medium">
                          {official.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
