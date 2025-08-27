import dotenv from "dotenv";
import { createQueryEmailTemplate } from "../utils/email.template.js";
import { transporter } from "../config/nodemailer.config.js";
dotenv.config();

export const postQueryService = async (data) => {
  try {
    const htmlContent = createQueryEmailTemplate(data);
    const recipients = process.env.RECI_EMAIL

    console.log(recipients)

    const mailOptions = {
      from: `"Visvotsav" <${process.env.GMAIL_USER}>`,
      to: recipients,
      subject: `🚀 New Message from ${data.name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully to:", recipients);

    return { success: true, message: "Query submitted successfully!" };
  } catch (error) {
    console.error("Error in postQueryService:", error);
    throw new Error("Failed to send email notification.");
  }
};