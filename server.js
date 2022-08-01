const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories")

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

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

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Backend is running at ${PORT}`);
})
