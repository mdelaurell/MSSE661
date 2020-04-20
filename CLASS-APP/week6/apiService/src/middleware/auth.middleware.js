const {
    jwtconfig,
    verify
}  = require('../utils/jwt-helpers');

module.exports = (req,res,next) => {
    const authHeader = req.headers['auth-token'] || req.headers['authorization'];

    if (!authHeader) {
        // stop user auth validation
        res.staus(401).json({ auth: false, msg: 'Access denied' });
    }

    const token = authHeader.split(' ')[1];
    try {
        //return the user's id when creating the token
        const user = verify(token, jwtconfig.access, req, res);
        req.user = user;
        next();
    } catch (err) {
        res.status(403).json({ msg: 'Invalid Token'});
    }
};