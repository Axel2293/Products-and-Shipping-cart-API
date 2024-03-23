const express = require("express");
const cartRoutes = require("./routes/cart-route.js");
const productRouters = require("./routes/product-route.js");
const auth = require("./middleware/auth.js");

const api = express();
const port = 3101;

// JSON BODY RESPONSES MIDDLEWARE
api.use(express.json())

// Cart and Products endpoints //Load auth middleware function
api.use('/api/cart', auth, cartRoutes);
api.use('/api/product', auth, productRouters);

//Root end point
api.use('/', (req, res)=>res.send("Integrated Assignment 3. e-commerce app"));


api.listen(port, ()=>console.log("[API] Running on port "+port));