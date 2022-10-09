
const dotenv = require("dotenv");

dotenv.config();

const express = require("express");

const app = express();

const cors = require("cors");

const cookieParser = require("cookie-parser");

const connection = require("./db/connection");

const CONSTANT = require("./utils/constants/appConstants");

const port = 5000 || process.env.PORT;

const authRoute = require("./routes/authRoutes");            

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(CONSTANT.ROUTES.AUTH, authRoute);

app.listen(() => {
    console.log(`Server is listening on port ${port}`);
    connection(process.env.MONGO_URI);
});