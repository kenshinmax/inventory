const express = require("express");
const properties = require("../package.json");

const inventoryRoute = express.Router();

inventoryRoute.get("/", (req, res) => {
    const inventoryInfo = {
        name: properties.name,
        description: properties.description,
        author: properties.author
    }
    res.json(inventoryInfo)
})


module.exports = inventoryRoute