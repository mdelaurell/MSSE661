const express = require('express');
//const logger = require('logger');
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks.routes');
const middleware = require('./middleware/errors.middleware');

const app = express();
const port = process.env.PORT || 3000;
const logLevel = process.env.LOG_LEVEL || 'DEBUG';

// Middleware - logs server request to console
app.use(logger(logLevel));

//Middleware - parses incoming requets data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//*********************************/
// Route-Handling Middleware Functions
//********************************/

// Handle routes for tasks.
app.use('/tasks', tasksRoutes);
//app.use('/users',usersRoutes);

// Handle 404 request
app.use(middleware.error404);

// Handle 500 requests.
app.use(middleware.error500);


app.use(express.static('public'));

app.use('/css',express.static(__dirname = '/public/css'));
app.use('/js',express.static(__dirname = '/public/src'));

app.listen(port, () => {
    console.log('Server started at http://localhost:%s', $port );
});