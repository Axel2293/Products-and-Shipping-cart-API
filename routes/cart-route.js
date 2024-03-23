const router = require("express").Router();

router.get("/", (req, res)=>{
    console.log("HERE WE ARE");
    res.send("GET REQUEST CART");
});

module.exports = router;