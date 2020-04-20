
const bcrypt = require('bcryptjs');
const connect = require('../db-config');

const {
    GET_ME_BY_USERNAME,
    GET_ME_BY_USERNAME_WITH_PASSWORD,
    INSERT_NEW_USER,
} = require('../queries/user.queries');
const query = require('../utils/query');

const{
    refreshTokens,
    generateAccessToken,
    generateRefreshToken,
} = require('../utils/jwt-helpers');


//register user
exports.registerUser = async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password);
    const params = [req.body.username,  passwordHash, req.body.emailAddress, req.body.activeUser]

    const con = await connect().catch((err) => {
        throw err;
    });

    //check for exsiting user
    const user = await query(con, GET_ME_BY_USERNAME, [beq.body.username]).catch(
        (err) => {
            res.status(500);
            res.send({ msg: 'Could not retrieve user.'});
        }
    );

    if (user.lgength == 1) {
        res.status(403).send({msg: 'User already exists, you cannot create this user.'});
    } else {
        const result = await query(con, INSERT_NEW_USER, params).catch((err) => {
            res.status(500).send({msg: 'Could not register user.  Please try again later.'});
        });

        res.send({ msg: 'User created.'});
    }
};

exports.login = async (req, res) => {
    // establish a connection
    const con = await connection().catch((err) => {
      throw err;
    });
  
    // check for existing user first
    const user = await query(con, GET_ME_BY_USERNAME_WITH_PASSWORD, [
      req.body.username,
    ]).catch((err) => {
      res.status(500);
      res.send({ msg: 'Could not retrieve user.' });
    });
  
    // if the user exists
    if (user.length === 1) {
      //   validate entered password from database saved password
      const validPass = await bcrypt
        .compare(req.body.password, user[0].password)
        .catch((err) => {
          res.json(500).json({ msg: 'Invalid password!' });
        });
  
      if (!validPass) {
        res.status(400).send({ msg: 'Invalid password!' });
      }
      // create token
      const accessToken = generateAccessToken(user[0].user_id, {
    
        expiresIn: 7200,
      });
      const refreshToken = generateRefreshToken(user[0].user_id, {
        expiresIn: 7200,
      });
  
      refreshTokens.push(refreshToken);
  
      res
        .header('access_token', accessToken) 
        .send({
          auth: true,
          msg: 'Logged in!',
          token_type: 'bearer',
          access_token: accessToken,
          expires_in: 86400,
          refresh_token: refreshToken,
        });
    }
  };
  
  exports.token = (req, res) => {
    const refreshToken = req.body.token;
  
    
    if (!refreshToken) {
      res
        .status(401)
        .send({ auth: false, msg: 'Access Denied. No token provided.' });
    }
  
    if (!refreshTokens.includes(refreshToken)) {
      res.status(403).send({ msg: 'Invalid Refresh Token' });
    }
  
    const verified = verifyToken(refreshToken, jwtconfig.refresh, req, res);
  
    if (verified) {
      const accessToken = generateToken(user[0].user_id, { expiresIn: 86400 });
      res
        .header('access_token', accessToken) 
        .send({
          auth: true,
          msg: 'Logged in!',
          token_type: 'bearer',
          access_token: accessToken,
          expires_in: 20,
          refresh_token: refreshToken,
        });
    }
    res.status(403).send({ msg: 'Invalid Token' });
  };
  
  exports.logout = (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  
    res.send({ msg: 'Logout successful' });
  };
  