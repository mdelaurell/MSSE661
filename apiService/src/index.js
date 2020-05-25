const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const travelersRoutes = require('./routes/travelers.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
//const middleware = require('./middleware/errors.middleware');

const app = express();
const port = 3000;
const logLevel = process.env.LOG_LEVEL || 'dev';
const env = process.env.NODE_ENV;

// Middleware - logs server request to console
if (env != 'test'){
    app.use(logger(logLevel));
}
//Middleware - parses incoming requets data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Allow website to talk to API
app.use(cors());

//*********************************/
// Route-Handling Middleware Functions
//********************************/
// Partial API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/travelers', travelersRoutes);

// Handle 404 request
//app.use(middleware.error404);

// Handle 500 requests.
//app.use(middleware.error500);


app.use(express.static('public'));

app.use('/css',express.static(__dirname = '/public/css'));
app.use('/js',express.static(__dirname = '/public/src'));

app.listen(port, () => {
    console.log('Server started at http://localhost:3000' );
});