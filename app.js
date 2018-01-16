const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const socketio = require('socket.io');
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
nunjucks.configure('views', { noCache: true });

const server = app.listen(3000, () => console.log('server running'));
const io = socketio.listen(server);
app.use('/', routes(io));
