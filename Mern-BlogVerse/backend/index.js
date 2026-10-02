const express = require('express');
const app = express();
const session = require("express-session");
const cookie = require("cookie-parser");
const jwt=require("jsonwebtoken");
const PORT=process.env.PORT||3000
const cors = require('cors');
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
app.use(express.json());
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require('cookie-parser');
app.use("/api/posts", postRoutes);
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
    console.log("this is a middleware");
    next();

});
app.use((req, res, next) => {
    console.log("this is a middleware2");
    next();

});
app.get("/", (req, res) => {
    res.cookie("cookieName", "thisisasecret");
    res.send("server is running");
});
app.use("/cookie", (req, res) => {
    console.log(req.cookies);
    res.send("Cookie route");

});

app.use(session({
    secret: process.env.SESSION_SECRET || "classroom-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
const JWT_SECRET=process.env.JWT_SECRET||"teaching-secret";
app.get("/jwt",(req,res)=>{
    let token=jwt.sign({user:"sivajyothi",branch:"cse"},JWT_SECRET);
    res.cookie("my-token",token,{httpOnly:true});
    console.log(token);
    res.send("jwt route");
});
app.get("/jwt-verify",(req,res)=>{
    let token=req.cookies["my-token"];
    let data=jwt.verify(token,JWT_SECRET);
    console.log(data);
    res.send("jwt verify route")
});


app.get('/', (req, res) => {
    res.send("api is running");
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});