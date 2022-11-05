const {
  NODE_ENV = 'development',
  MONGODB_URL = 'mongodb://db:27017/graphql',
  PORT = 4001
} = process.env

export { NODE_ENV, MONGODB_URL, PORT }
