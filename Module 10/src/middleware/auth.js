const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, "secret_key", (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        req.userId = decoded.userId;
        next();
    });
}

module.exports = authenticate;
