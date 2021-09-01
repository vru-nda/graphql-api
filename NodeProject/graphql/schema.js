const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type Post {
    _id: ID!
    title: String!
    content: String!
    imgUrl: String!
    creator: User!
    createdAt: String
    updatedAt: String!
}

type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    posts: [Post!]!
}

type AuthData {
    token: String!
    userId: String!
}

input UserInputData{
    name: String!
    email: String!
    password: String
}

type RootQuery{
    login(email: String!, password: String!): AuthData!
}
type RootMutation {
    createUser(userInput: UserInputData ):User!
}

 schema {
     query: RootQuery
     mutation: RootMutation
 }
`);
