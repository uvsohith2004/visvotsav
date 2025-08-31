import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postQueryRoute from "./src/routes/queries.routes.js";
import postFormRoute from "./src/routes/form.routes.js";

// Load environment variables from.env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
const allowedOrigins = [
  "http://localhost:4000",
  "https://visvotsav-teal.vercel.app",
  "https://visvotsav.vercel.app",
];

const corsOptions = {

  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
  
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
// Routes
app.get("*", (req, res, next) => {
  const path = req.path;
  if (!path.startsWith("/api")) {
    return res.redirect(301, "https://visvotsav.vercel.app");
  }
  next();
});
app.use("/api/queries", postQueryRoute);
app.use("/api/form-submit", postFormRoute);

app.listen(PORT, function () {
  console.log(`Server is running at ${PORT}`);
});
