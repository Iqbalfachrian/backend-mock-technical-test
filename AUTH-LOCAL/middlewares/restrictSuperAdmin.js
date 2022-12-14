const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
 const salt = "binar";
        console.log(req.headers);
        const tokenJWT = req.headers.authorization;
        var tokenDecoded = await jwt.verify(tokenJWT, salt);
        console.log(tokenDecoded);
        if(tokenDecoded.isAdmin != 1){
            return res.status(401).json({
                status: "unauthorized"
            })
        }
        next()
}