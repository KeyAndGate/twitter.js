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
app.use(express.static('public'));
app.use('/', routes);
nunjucks.configure('views', { noCache: true });

app.listen(3000, function(){
    console.log('server running');
});
