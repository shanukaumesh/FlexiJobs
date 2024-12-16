const jwt = require("jsonwebtoken");
const logger = require("./logger.js");

const JWT = process.env.JWT;

// Middleware to verify the token and extract user information
exports.verifyToken = (req, res, next) => {
  const token =
    req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied! No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error("Error verifying the token", error);
    return res
      .status(401)
      .json({ message: "Unable to verify token", error: error.message });
  }
};
