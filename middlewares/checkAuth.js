const jwt = require("jsonwebtoken");

const CheckAuth = (req, res,  next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, "User Login");
        req.decodeToken = verify;
        next();
    } catch (error) {
        console.log(error, "ee")
        res.status(401).json({message: "Unauthorized"})
    }
};

module.exports =  CheckAuth;