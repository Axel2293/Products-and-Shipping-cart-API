function auth(req, res, next) {
    let token = req.get("x-auth");

    if (token && token == "SUPERSECUREPASSWORD") {
        req.auth = true;
        next();
    }
    else{
        req.auth = false;
        next();
    }
}

module.exports = auth;