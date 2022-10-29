const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!,
    savedBooks: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]!
    user(email: String!): User
    me: User
    books: [Book]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, savedBooks: [String]): User
  }
`;

module.exports = typeDefs;
