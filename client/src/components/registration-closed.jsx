import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posterImage from "@/assets/banner.jpeg";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  AlertCircle,
  Download,
  Phone,
  Mail,
  ExternalLink,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import homeData from "@/constants/homeData";
import { Link } from "react-router-dom";
const RegistrationClosedCard = () => {
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");

  // Check if registration is closed
  useEffect(() => {
    const checkRegistrationStatus = () => {
      const now = new Date();
      const deadline = new Date(`${homeData.lastDate} ${homeData.lastTime}`);

      if (now > deadline) {
        setIsRegistrationClosed(true);
      } else {
        setIsRegistrationClosed(false);
        // Calculate time remaining
        const diff = deadline.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeRemaining(`${days}d ${hours}h ${minutes}m remaining`);
      }
    };

    checkRegistrationStatus();
    const interval = setInterval(checkRegistrationStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(45deg, #ef4444, #dc2626)",
        "linear-gradient(45deg, #dc2626, #b91c1c)",
        "linear-gradient(45deg, #b91c1c, #ef4444)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!isRegistrationClosed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="w-full max-w-lg mx-auto shadow-xl border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calendar className="w-6 h-6" />
                Registration Open
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <motion.div
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full"
                >
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">{timeRemaining}</span>
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {homeData.event} {homeData.eventYear}
                  </h3>
                  <p className="text-gray-600">{homeData.collegeName}</p>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {homeData.eventAddress}
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                    Register Now
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-red-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-red-300 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-20 w-60 h-60 bg-pink-300 rounded-full opacity-15"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10"
        >
          <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden">
            <motion.div
              variants={backgroundVariants}
              animate="animate"
              className="bg-gradient-to-r from-red-500 to-red-600"
            >
              <CardHeader className="text-white relative">
                <motion.div
                  className="absolute top-4 right-4 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowCard(false)}
                ></motion.div>

                <motion.div variants={itemVariants} className="text-center">
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4"
                  >
                    <AlertCircle className="w-10 h-10" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold mb-2">
                    Registration Closed
                  </CardTitle>
                  <p className="text-red-100 text-lg">
                    Sorry, the registration deadline has passed
                  </p>
                </motion.div>
              </CardHeader>
            </motion.div>

            <CardContent className="p-8 bg-white">
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Event Information */}
                <div className="text-center space-y-3">
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {homeData.event} {homeData.eventYear}
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-lg"
                  >
                    {homeData.collegeName}
                  </motion.p>
                </div>

                {/* Event Details */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-6 space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-red-100 p-2 rounded-full">
                        <Calendar className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Event Dates</p>
                        <p className="font-semibold text-gray-900">
                          {homeData.eventMonth} {homeData.eventDate}
                          {homeData.suffix}, {homeData.eventYear}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-red-100 p-2 rounded-full">
                        <Clock className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Registration Closed
                        </p>
                        <p className="font-semibold text-red-600">
                          {homeData.lastDate} at {homeData.lastTime}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-3 md:col-span-2"
                    >
                      <div className="bg-red-100 p-2 rounded-full">
                        <MapPin className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Venue</p>
                        <p className="font-semibold text-gray-900">
                          {homeData.eventAddress}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Alternative Actions */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    What you can still do:
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex items-center gap-3 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <Download className="w-5 h-5 text-blue-600" />
                        <div className="text-left" onClick>
                          <a
                            href={posterImage}
                            download
                            className="font-semibold text-blue-900"
                          >
                            Download {homeData.downloadSize}
                          </a>
                          <p className="text-sm text-blue-600">
                            Event information
                          </p>
                        </div>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex items-center gap-3 border-green-200 hover:bg-green-50 hover:border-green-300"
                      >
                        <Users className="w-5 h-5 text-green-600" />
                        <div className="text-left">
                          <p className="font-semibold text-green-900">
                            Join as Audience
                          </p>
                          <p className="text-sm text-green-600">
                            Watch the events
                          </p>
                        </div>
                      </Button>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex items-center gap-3 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                      >
                        <Phone className="w-5 h-5 text-purple-600" />
                        <div className="text-left">
                          <Link
                            to="/"
                            className="font-semibold text-purple-900"
                          >
                            Contact Us
                          </Link>
                          <p className="text-sm text-purple-600">For queries</p>
                        </div>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex items-center gap-3 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                      >
                        <ExternalLink className="w-5 h-5 text-orange-600" />
                        <div className="text-left">
                          <p className="font-semibold text-orange-900">
                            Visit Website
                          </p>
                          <p className="text-sm text-orange-600">
                            More information
                          </p>
                        </div>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Next Year Message */}
                <motion.div
                  variants={itemVariants}
                  className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block mb-3"
                  >
                    🎉
                  </motion.div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Don't Miss Next Year!
                  </h4>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RegistrationClosedCard;
