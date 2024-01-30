const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    const productInventory = {
       name: "Minecraft Hero",
       quantity: 12
    }
    
    return res.status(201).json({
        meesage: 'product info',
        productInventory
    })
})


module.exports = inventoryRoute