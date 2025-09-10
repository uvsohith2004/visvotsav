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
    </section>
  );
};

export default Footer;
