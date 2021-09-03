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
    status: String!
    email: String!
    password: String
    posts: [Post!]!
}

type AuthData {
    token: String!
    userId: String!
}

type PostData {
    posts: [Post!]!
    totalPosts: Int!
}

input UserInputData {
    name: String!
    email: String!
    password: String
}

input PostInputData {
    title: String!
    content: String!
    imgUrl: String!
}

type RootQuery{
    login(email: String!, password: String!): AuthData!
    posts(page: Int): PostData!
    post(postId: ID!): Post!
    user:User!
}

type RootMutation {
    createUser(userInput: UserInputData ):User!
    createPost(postInput: PostInputData): Post!
    updatePost(postId: ID!, postInput: PostInputData): Post!
    deletePost(postId: ID!): Boolean
    updateStatus(status:String!): User!
}

 schema {
     query: RootQuery
     mutation: RootMutation
 }
`);
