const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();

const people = [{name: 'James'}, {name: 'Harry'}, {name: 'John'}];
const data = {
  title: 'test title',
  people: people
}

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(morgan('combined'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${res.statusCode}`);
    next();
});

app.use('/special', (req, res, next) => {
    console.log('special access');
    next();
});

app.get('/', (req, res) => res.render('index', data))

app.listen(3000, function(){
    console.log('server running');
});
