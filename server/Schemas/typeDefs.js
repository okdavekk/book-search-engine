const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    Books: [Book]!
  }

  type Book {
    _id: ID
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    Books(BookId: ID!): Book
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(BookText: String!, thoughtAuthor: String!): Book
    saveBook(
      BookId: ID!
      title: String!
    ): Bool
    deleteBook(BookId: ID!): Book
  }
`;

module.exports = typeDefs;
