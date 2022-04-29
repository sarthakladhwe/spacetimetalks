const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.get("/login", async (req, res) => {
    try {
        
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router;