import React from "react";
import FooterHead from "./footer-head";
import FooterBody from "./footer-body";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <section id='footer' className="w-full flex-1 flex flex-col">
      <FooterHead />
      <FooterBody />
      <Separator  className=' '/>
      <div className=" flex w-full bg-foreground py-5 gap-2 flex-col items-center bg-black">
        <p className="text-background font-thin"> Built With <span className="heart-beat">❤️</span> By UV.Sohith, IV ECE, Tesla</p>
        <p className="text-background font-thin">Copyright &copy; PBR VITS</p>
      </div>
    </section>
  );
};

export default Footer;
