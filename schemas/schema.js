const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const movies = [
    {id :"1", name : 'mr Robot', genre: 'Crime'},
    {id :"2", name : 'mr Geek', genre: 'Sci-fi'},
    {id :3, name : 'Fall in Love', genre: 'Romance'}
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie=> movie.id == args.id)
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});