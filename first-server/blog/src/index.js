const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handleBars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// http logger
app.use(morgan('combined'));

// handle bar config
app.engine(
    'hbs',
    handleBars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
