const router = require("express").Router();
const products = require("../data/products.json");


// Get all the products list
    // Admin sees the stock value
router.get("/", (req, res)=>{
    let prods = products.slice();
    let {uuid, minPrice, maxPrice, unit, description, category, name} = req.query;

    //FIlter by UUID
    if (uuid) {
        prods = prods.filter(p=>p.uuid==uuid);
    }

    if (minPrice) {
        if (!isNaN(minPrice)) {
            prods = prods.filter(p=>p.pricePerUnit>=minPrice);
        }else{
            res.status(400).send({
                message:"Min price argument is not a number"
            })
        }
    }

    if (maxPrice) {
        if (!isNaN(maxPrice)) {
            prods = prods.filter(p=>p.pricePerUnit<=maxPrice);
        }else{
            res.status(400).send({
                message:"Max price argument is not a number"
            })
        }
    }

    if (unit) {
        prods = prods.filter(p=>p.unit.slice().toLowerCase().includes(unit.toLowerCase()));
    }

    if (description) {
        prods = prods.filter(p=>p.description.slice().toLowerCase().includes(description.toLowerCase()))
    }
    if (category) {
        prods = prods.filter(p=>p.category.slice().toLowerCase().includes(category.toLowerCase()))
    }

    if (name) {
        prods = prods.filter(p=>p.name.slice().toLowerCase().includes(name.toLowerCase()))
    }

    if (req.auth==true) {
        console.log('[API-Products] SENDING PRODUCTS DATA (ADMIN)');
        res.send(prods);
    }else{
        console.log('[API-Products] SENDING PRODUCTS DATA (NO ADMIN)');
        res.send(prods.map(p => {
            let {stock, ...prod} = p;
            return prod;
        }));
    }
});

router.get('/:id',(req, res)=>{
    
});

module.exports = router;