require('dotenv').config(); 
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());

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
