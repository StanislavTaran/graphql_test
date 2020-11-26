const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const schema = require('../schemas/schema')

const app = express()
const PORT = process.env.PORT || 3005;

app.listen(PORT);
console.log('Server started...')

app.use('/graphql', graphqlHTTP({schema, graphiql : true}))
