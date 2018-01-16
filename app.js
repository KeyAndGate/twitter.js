const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();

const people = [{name: 'James'}, {name: 'Harry'}, {name: 'John'}];
const data = {
  title: 'test title',
  people: people
}

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(morgan('combined'));
nunjucks.configure('views', { noCache: true });

app.use('/', routes);

app.get('/stylesheets/style.css', (req, res) => {
  res.render('/public/stylesheets/style.css');
});
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url} ${res.statusCode}`);
//     next();
// });
//
// app.use('/special', (req, res, next) => {
//     console.log('special access');
//     next();
// });
//
// app.get('/', (req, res) => res.render('index', data))

app.listen(3000, function(){
    console.log('server running');
});
