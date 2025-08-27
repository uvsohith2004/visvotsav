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
app.use(
  cors({
    origin: ["https://visvotsav.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
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
