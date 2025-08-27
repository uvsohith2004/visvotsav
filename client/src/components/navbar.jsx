import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import { navbar } from "@/constants";
// import Marquee from "./marquee";
import { useAnimation, motion } from "framer-motion";
const Navbar = () => {
  // const [isMarqueeVisible, setIsMarqueeVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // setIsMarqueeVisible(scrollPosition < 10);
      setIsTransparent(scrollPosition < 10);

      controls.start({
        // y: isMarqueeVisible ? 0 : -5,
        backgroundColor: isTransparent ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, )",
        transition: { duration: 0.3 },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent, controls]);

  const handleSheetOpen = () => setIsSheetOpen(true);
  const handleSheetClose = () => setIsSheetOpen(false);

  return (
    <>
      {/* <Marquee isVisible={isMarqueeVisible} /> */}
      <motion.nav
        className={cn("w-full h-16 text-white backdrop-blur flex justify-between items-center px-3 py-4 fixed z-50")}
        initial={{ y: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={controls}
      >
        <div>
          <h2
            className={cn(
              "md:text-2xl text-white text-xl font-bold",
              location.pathname === "/" ? "text-white" : "text-black",
              !isTransparent&&"text-white"
            )}
          >
            {navbar.title}
            <span className="max-sm:hidden"> {navbar.year}</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <div>
          <Link
                      to={location.pathname === "/" ? "/register" : "/"}
                      className={cn(buttonVariants({ variant: "default" }),'w-full rounded-full')}
                    >
                      {location.pathname === "/" ? "Register" : "Home"}
                    </Link>
          </div>
          <div>
            <Sheet
              open={isSheetOpen}
              onOpenChange={(open) => {
                if (open) {
                  handleSheetOpen();
                } else {
                  handleSheetClose();
                }
              }}
            >
              <SheetTrigger asChild>
                <Button
                  variant={"ghost"}
                  className={cn(
                    location.pathname === "/register" &&
                      "text-black hover:bg-black/10",!isTransparent&&"text-white hover:bg-white/10 hover:text-gray-200"
                  )}
                >
                  <Menu className={cn("h-6 w-6")} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-primary">Menu</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col items-center mt-4 mb-1 p-2">
                  {navbar.links.map((link, index) => (
                    <React.Fragment key={link.name}>
                      <SheetClose asChild>
                        <li className="py-2">
                          <ScrollLink
                            to={link.path}
                            className="text-primary cursor-pointer hover:text-primary/50"
                            smooth={true}
                            duration={500}
                            onClick={handleSheetClose}
                          >
                            {link.name}
                          </ScrollLink>
                        </li>
                      </SheetClose>
                      {index < navbar.links.length - 1 && (
                        <Separator className="my-1 bg-primary" />
                      )}
                    </React.Fragment>
                  ))}
                  <Separator className="my-1 bg-primary" />
                  <SheetClose asChild>
                    <Link
                      to={location.pathname === "/" ? "/register" : "/"}
                      className={cn(buttonVariants({ variant: "default" }),'w-full mt-10')}
                    >
                      {location.pathname === "/" ? "Register" : "Home"}
                    </Link>
                  </SheetClose>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
