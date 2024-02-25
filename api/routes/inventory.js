const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemRoute = express.Router();


//const url = "mongodb://host.docker.internal:27017/mongodb"
//mongoose.connect(url);
//mongoose.set("strictQuery", false);


itemRoute.get("/", async (req, res) => {
    console.log("in items function...")
    async function runProductSearch() {
        await Product.findOne({ name: 'Croatia' }).exec();    
    }
    runProductSearch().catch(function(err) {
        console.log(err);
      })
    
})

const Product = mongoose.model('product', new Schema(
    {
      name: {
          type: String,
          required: true
      }, 
      id: {
          type: String,
          required: true
      }
    }
  
  ));

 
module.exports = itemRoute