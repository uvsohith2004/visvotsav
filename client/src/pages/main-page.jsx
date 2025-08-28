import React, { useEffect, useRef, useState } from "react";
import { about, pricing, home, scheduleData, socialLinks } from "@/constants";
import GoogleMaps from "@/components/google-maps";
import backgroundVideo from "@/assets/background.mp4";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import posterImage from "@/assets/banner.jpg";
import ContactForm from "@/components/contact-form";
import { Element, Link } from "react-scroll";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Clock, Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
const EventCard = ({ event, index }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
    >
      <div className="bg-gradient-to-r bg-primary px-4 py-2">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 font-bold text-lg">{event.date}</p>
        <p className="text-gray-800 font-semibold mt-2">{event.time}</p>
        <p className="text-gray-700 mt-1">{event.venue}</p>
      </div>
    </motion.div>
  );
};
const PricingCard = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(() => {
    document.title = `${home.event}  |  ${home.eventYear}`;
  }, []);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <span className="text-3xl font-extrabold text-gray-900">
            {item.price}
          </span>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-gray-500 mb-6 flex-1 ">{item.description}</p>
          <ul className="space-y-4 mb-6 ">
            {item.details.map((detail) => (
              <li key={detail.id} className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">{detail.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/register"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-full text-center hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
        >
          Register Now
        </a>
      </div>
    </motion.div>
  );
};

const MainPage = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const buttonRef = useRef(null);
  const [visibleScheduleEvents, setVisibleScheduleEvents] = useState(6);
  const scheduleButtonRef = useRef(null);

  const showMoreScheduleEvents = () => {
    setVisibleScheduleEvents((prev) => Math.min(prev + 6, scheduleData.length));
  };

  const showLessScheduleEvents = () => {
    setVisibleScheduleEvents(6);
    setTimeout(() => {
      scheduleButtonRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const showMore = () => {
    setVisibleCards((prev) => Math.min(prev + 6, pricing.length));
  };

  const showLess = () => {
    setVisibleCards(6);

    buttonRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full ">
      <Element name="home">
        <section
          id="section_1"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="container mx-auto px-4 z-20 text-center text-white">
            <p className="text-lg mb-2 font-light">{home.collegeName}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
              {home.event} {home.eventYear}
            </h1>

            <div className="flex justify-center space-x-4 mb-12">
              <Link
                to="about"
                smooth={true}
                className="bg-primary hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Know More
              </Link>
              <a
                href={posterImage}
                download
                className="group relative bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Download
                <span className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-primary text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {home.downloadSize}
                </span>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center">
                <Clock className="mr-2 text-yellow-400" />
                <p>
                  {home.eventDate}
                  <sup>{home.suffix}</sup>, {home.eventMonth} {home.eventYear}
                </p>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-red-400" />
                <p>{home.eventAddress}</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <span>Follow Us:</span>
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                   <a
                    key={link.name}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white hover:text-blue-200 transition-colors duration-300"
                 >
                    <IconComponent />
                 </a>
                );
              })}
            </div>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section
          id="about"
          className="flex bg-violet-900 w-full min-h-screen p-6 gap-2 shadow-lg"
        >
          <div className="flex flex-row justify-center items-center mx-auto my-auto gap-10 max-lg:flex-col">
            <div className="flex-1  ">
              <div className="flex max-xl:justify-center  mt-10 flex-col">
                <h2 className="text-white font-bold text-4xl cursor-pointer ">
                  {about.title}
                </h2>
                <p className="text-slate-300 text-lg max-w-[540px]">
                  {about.description}
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-white font-bold text-4xl  cursor-pointer">
                  {about.collegeName}
                </h2>
                <p className="text-slate-300 text-lg max-w-[540px]">
                  {about.CollegeDescription}
                </p>
              </div>
            </div>
            <div className="flex-1 ">
              <img
                src={about.image}
                alt={"sky"}
                className="rounded-xl drop-shadow-lg"
              />
            </div>
          </div>
        </section>
      </Element>
      {/* schedule section */}
      <Element name="schedule" className="pt-3">
        <section
        ref={scheduleButtonRef}
          id="schedule"
          className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Schedule
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {scheduleData.slice(0, visibleScheduleEvents).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </div>
            {visibleScheduleEvents < scheduleData.length && (
              <div className="mt-16 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-gray-100 text-sm text-gray-500">
                    click on show more for more information
                  </span>
                </div>
              </div>
            )}
            <div className="flex justify-center mt-8" >
              {visibleScheduleEvents < scheduleData.length ? (
                <Button
                  onClick={showMoreScheduleEvents}
                 className='rounded-full'
                  size="lg"
                >
                  Show More 
                </Button>
              ) : (
                visibleScheduleEvents > 6 && (
                  <Button
                    onClick={showLessScheduleEvents}
                   className='rounded-full'
                    size="lg"
                  >
                    Show Less 
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
      </Element>
      {/* pricing section */}
      <Element name="pricing">
        <section
          ref={buttonRef}
          className="bg-gradient-to-b from-violet-100 to-white py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {pricing.slice(0, visibleCards).map((item, index) => (
                  <PricingCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>
            {visibleCards < pricing.length && (
              <div className="mt-16 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-sm text-gray-500">
                    Click on show more to view all events
                  </span>
                </div>
              </div>
            )}
            <div className="flex justify-center mt-8">
              {visibleCards < pricing.length ? (
                <Button onClick={showMore}  className='rounded-full' size="lg">
                  Show More
                </Button>
              ) : (
                visibleCards > 6 && (
                  <Button onClick={showLess}  className='rounded-full' size="lg">
                    Show Less
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
      </Element>
      {/* contact section */}
      <Element name="contact" className="pt-5 pb-10">
        <section className="w-full p-3  flex-col flex  mt-5 items-center">
          <h2 className="text-foreground font-bold text-4xl mt-5 mb-10 cursor-pointer">
            Contact
          </h2>
          <Tabs
            defaultValue="contact-form"
            className=" md:w-3/4 lg:w-1/2 w-full "
          >
            <TabsList className="grid w-full h-15 grid-cols-2 bg-gray-700/20 rounded-full ">
              <TabsTrigger
                value="contact-form"
                className="rounded-full p-4 ml-1 my-1 "
              >
                Contact form
              </TabsTrigger>
              <TabsTrigger
                value="google-maps"
                className="rounded-full p-4 mr-1 my-1"
              >
                Google maps
              </TabsTrigger>
            </TabsList>
            <TabsContent value="contact-form">
              <ContactForm />
            </TabsContent>
            <TabsContent value="google-maps">
              <GoogleMaps />
            </TabsContent>
          </Tabs>
        </section>
      </Element>
    </div>
  );
};

export default MainPage;
