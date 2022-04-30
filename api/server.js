const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to mongo"))
.catch(console.log(err => console.log(err)));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(201).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen("5000", () => {
    console.log("Backend is running..");
})
