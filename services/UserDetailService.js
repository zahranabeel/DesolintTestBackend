const UserDetail = require("../models/UserDetail.Model");

const createUserDetailService = async (imageArray, carModel, price, phoneNo, city, token_id) => {
    try {
        const userDetail = new UserDetail({
            carModel: carModel,
            price: price,
            phoneNo: phoneNo,
            city: city,
            images: imageArray,
            user_id: token_id,
        });
        const userDetailSaved = await userDetail.save();
        return { code: 200, message: "User Detail Saved Successfully" }
    } catch (error) {
        console.log(error, "error")
        return { code: 500, message: error }
    }
};

const getAllUserDetailService = async (token_id) => {
    try {
        const result = await UserDetail.find({ user_id: token_id });
        return { code: 200, message: result };
    } catch (error) {
        console.log(error, "eeee")
        return { code: 500, message: error };
    }
};

module.exports = {
    createUserDetailService,
    getAllUserDetailService
}