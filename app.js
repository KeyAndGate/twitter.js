const express = require( 'express' );
const app = express();

// var log = [];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${res.statusCode}`);
    next();
})

app.get('/', (req, res) => res.send('connected'))

app.listen(3000, function(){
    console.log('server running');
});
