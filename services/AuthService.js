const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");

const Jwt_Secret = "User Login";

const handleLoginService = async (authBody) => {
    try {
        const user = await User.find({ email: authBody.email });
        console.log(user, "userrr");
        if (user.length < 1) {
            return { code: 401, message: "Unauthorized email" }
        } else {
            const comparePassword = await User.find({ password: authBody.password });

            if (comparePassword.length < 1) {
                return { code: 401, message: "Unauthorized password" }
            } else {
                const token = jwt.sign({
                    _id: user[0]._id,
                    email: user[0].email,
                    password: user[0].password
                },
                    Jwt_Secret,
                    {
                        expiresIn: "24h"
                    }
                );
                return {
                    code: 200, message: {
                        token: token
                    }
                }
            }
        }
    } catch (error) {
        console.log(error, "error")
        return { code: 500, message: error }
    }
};

module.exports = {
    handleLoginService
}