import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, 
  },
});

console.log("Nodemailer transporter configured successfully.");