const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/protected', authentication, (req, res) => {
    res.json({ message: 'Successed' });
});


exports.authentication = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json(err);
    }
};
