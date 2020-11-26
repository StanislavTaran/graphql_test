const express = require('express');
const {graphqlHTTP} = require('express-graphql')

const app = express()
const PORT = process.env.PORT || 3005;

app.listen(PORT);
console.log('Server started...')

app.use('/graphql', graphqlHTTP({}))
