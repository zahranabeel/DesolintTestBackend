const UserDetailService = require("../services/UserDetailService");
const { isUndefined } = require("lodash");

const createUserDetail = async (req, res) => {
    const files = req.files;
    let imageArray = !isUndefined(files) && files.map((file) => {
        let image = file.filename;
        return `http://localhost:5000/${image}`
    });
    let result = await UserDetailService.createUserDetailService(imageArray, req.body.carModel, req.body.price, req.body.phoneNo, req.body.price, req.decodeToken._id);
    res.status(result.code).json({ message: result.message })
};

const getAllUserDetail = async (req, res) => {
    let result = await UserDetailService.getAllUserDetailService(req.decodeToken._id);
    res.status(result.code).json(result.message)
};

module.exports = {
    createUserDetail,
    getAllUserDetail
}