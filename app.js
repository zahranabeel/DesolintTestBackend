const connectDB = require("./db");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const CheckAuth = require("./middlewares/checkAuth");
const AuthRoutes = require("./routes/Auth");
const UserRoutes = require("./routes/UserDetail");

const start = async () => {
    try {
        await connectDB("mongodb://localhost:27017/Test");
        console.log("Db connected Successfully");
        const app = express();
        app.use(bodyParser.json());
        app.use(cors())
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials, true')
            res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, X-Requested-With, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
            next();
        });
        app.use(express.static("uploads"));
        app.use('/auth', AuthRoutes);
        app.use("/user", CheckAuth, UserRoutes);

        app.listen(5000, () => {
            console.log("listining the port at 5000");
        });
    } catch (error) {
        console.log(error);
        console.log("Failed to connect to the database, server is not running.");
    }
};
start();