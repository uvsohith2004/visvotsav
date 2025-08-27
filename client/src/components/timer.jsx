import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { home } from "@/constants";
import { useLocation } from "react-router-dom";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/register") setIsCollapsed(true);
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(home.lastDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 z-[100]"
      >
        <Card className="overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600  text-white shadow-lg rounded-lg">
          {isCollapsed ? (
            <Button
              onClick={toggleCollapse}
              className="w-14 h-14 rounded-full bg-transparent shadow-md hover:bg-transparent transition-all duration-300"
            >
              <Clock className="w-6 h-6 text-white" />
            </Button>
          ) : (
            <div className="p-6">
              <Button
                onClick={toggleCollapse}
                className="absolute top-2 right-2 text-white hover:text-primary transition-colors duration-300 rounded-full w-10 h-10 p-0"
                variant="ghost"
              >
                <Clock className="w-5 h-5" />
              </Button>
              <h2 className="text-xl font-bold mb-4 mt-2 ">
                Registration Ends{" "}
              </h2>
              <div className="flex space-x-4 justify-center">
                <TimeUnit value={timeLeft.days} unit="Days" />
                <TimeUnit value={timeLeft.hours} unit="Hours" />
                <TimeUnit value={timeLeft.minutes} unit="Mins" />
                <TimeUnit value={timeLeft.seconds} unit="Secs" />
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

const TimeUnit = ({ value, unit }) => (
  <div className="flex flex-col items-center">
    {/* <div className="text-4xl font-bold mb-1">{value}</div> */}
    <div className="text-sm text-gray-200">{unit}</div>
    <div className="w-14 h-14 mb-2">
      <CircularProgressbar
        value={value}
        maxValue={unit === "Days" ? 365 : unit === "Hours" ? 24 : 60}
        text={`${value}`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "white",
          trailColor: "rgba(255,255,255,0.2)",
        })}
      />
    </div>
  </div>
);

export default CountdownTimer;
