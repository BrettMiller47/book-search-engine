const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
    books: async () => {
      return Book.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, savedBooks }) => {
      return User.create({ username, email, password, savedBooks });
    }
    // addBook: async (parent, { username, bookId }) => {
    //   return User.findOneAndUpdate(
    //     { email: email },
    //     {
    //       $addToSet: { savedBooks: bookId },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
  },
};

module.exports = resolvers;
