require('dotenv').config(); 
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN
const SECRET_KEY = process.env.SECRET_KEY;

// ✅ Custom CORS middleware
// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   const apiKey = req.headers['x-api-key'];

//   // Allow requests from the allowed origin
//   if (origin === ALLOWED_ORIGIN) {
//     res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,x-api-key");
//     return next();
//   }

//   // Allow Postman or other tools using x-api-key
//   if (apiKey && apiKey === SECRET_KEY) {
//     res.setHeader("Access-Control-Allow-Origin", "*"); // allow all for API key
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,x-api-key");
//     return next();
//   }

//   // Reject all other requests
//   return res.status(403).json({ error: "CORS policy: Access denied" });
// });

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
const youtubeRoutes = require("./routes/youtubeRoutes");
const tiktokRoutes = require("./routes/tiktokRoutes");
const instagramRoutes = require("./routes/instagramRoutes");
const facebookRoutes = require("./routes/facebookRoutes");
const twitterRoutes = require("./routes/twitterRoutes");
const universalRoutes = require("./routes/universalRoutes");
const capcutRoutes = require("./routes/capcutRoutes");
const pinterestRoutes = require("./routes/pinterestRoutes");

app.use("/api/youtube", youtubeRoutes);
app.use("/api/tiktok", tiktokRoutes);
app.use("/api/instagram", instagramRoutes);
app.use("/api/facebook", facebookRoutes);
app.use("/api/twitter", twitterRoutes);
app.use("/api/capcut", capcutRoutes);
app.use("/api/pinterest", pinterestRoutes);
app.use("/api/universal", universalRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
