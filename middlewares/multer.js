const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}_${Date.now()}_${Math.random()}${path.extname(file.originalname)}`)
    }
});

module.exports = imageUploader = multer({storage: storage});