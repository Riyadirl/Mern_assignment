const jwt = require("jsonwebtoken");

function generateToken(userId, secretKey) {
  const token = jwt.sign({ userId }, secretKey);
  return token;
}

module.exports = generateToken;
