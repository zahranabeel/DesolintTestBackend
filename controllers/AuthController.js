const AuthService = require("../services/AuthService");

const handleLogin = async (req, res) => {
    let result = await AuthService.handleLoginService(req.body);
    res.status(result.code).json(result.message);
};

module.exports = {
    handleLogin
}