const { getAllUsers, getUser } = require("./services/handlerService");

module.exports.resolvers = {
  Query: {
    users: () => getAllUsers(),
    user: (_, { id }) => getUser(id),
  },
}