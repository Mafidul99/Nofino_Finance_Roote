require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middlewar');

app.use(express.json());
app.use(cors());
const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
    credentials: true,
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

// const PORT = 5000;
connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is runing at port: ${process.env.PORT}`);
    });
});

