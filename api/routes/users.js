const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

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
        return res.status(401).json("You can update only your account")
    }
    
})

module.exports = router;