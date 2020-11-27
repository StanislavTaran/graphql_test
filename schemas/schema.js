const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLInt, GraphQLSchema } = graphql;

const movies = [
    {id :"1", name : 'mr Robot', genre: 'Crime', directorId: 1},
    {id :"2", name : 'mr Geek', genre: 'Sci-fi',  directorId: 3},
    {id :3, name : 'Fall in Love', genre: 'Romance',  directorId: 2}
]

const directors = [
    {id: 1, name: 'Quentin Tarantino', age: 55},
    {id: 2, name: 'Stanislav Taran', age: 44},
    {id: 3, name: 'John Travolta', age: 45},
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director:{
            type: DirectorType,
            resolve(parent,args){
                return directors.find(movie=> movie.id == parent.id)
            }
        }
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
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
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find(movie=> movie.id == args.id)
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});