const express = require( 'express' );
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${res.statusCode}`);
    next();
});

app.use('/special', (req, res, next) => {
    console.log('special access');
    next();
});

app.get('/', (req, res) => res.send('connected'))

app.listen(3000, function(){
    console.log('server running');
});
