const express  = require('express')

//import Schema from './src/schema'
const Schema = require('./schema')
const graphqlHTTP = require('express-graphql')
// import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3000

app.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

let server = app.listen(port, function () {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});

