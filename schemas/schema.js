const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString} = graphql;

const MovieType = GraphQLObjectType({
    name : 'Movie',
    fields: ()=>({
        id: {type : GraphQLString},
        name: {type : GraphQLString},
        genre: {type : GraphQLString},
    })
})