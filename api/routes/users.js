const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Post = require("../models/Post");

// UPDATE
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            res.status(200).json(updatedUser);
        
        } catch(err) {
            res.status(500).json(err)
        }
    } else {
        return res.status(401).json("You can update only your account!")
    }
    
})

// DELETE
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

// GET USER
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