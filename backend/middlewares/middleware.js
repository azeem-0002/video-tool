// middleware.js
require('dotenv').config(); 

exports.checkApiKey = (req, res, next) => {
  const clientKey = req.headers['x-api-key'];
  const serverKey = process.env.X_API_KEY;

  if (!clientKey) {
    return res.status(401).json({ message: "Unauthorized User" });
  }

  if (clientKey !== serverKey) {
    return res.status(403).json({ message: "Invalid User" });
  }

  next(); // Key is valid, proceed to the route
};
