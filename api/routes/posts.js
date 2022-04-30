const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = newPost.save();
        res.status(201).json(savedPost); 
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE POST
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            if(user) {
                try {
                    await Post.deleteMany({username: user.username})
                    await User.findByIdAndDelete(req.params.id)
                    res.status(200).json("User has been deleted.");
                
                } catch(err) {
                    res.status(500).json(err)
                }
            }
        } catch {
            res.status(104).json("User not found!");
        }
        
    } else {
        return res.status(401).json("You can delete only your account!")
    }
    
})

// DELETE POST

// GET POST
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;