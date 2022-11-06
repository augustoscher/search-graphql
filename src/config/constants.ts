const {
  NODE_ENV = process.env.NODE_ENV || 'development',
  ELASTIC_URL = process.env.ELASTIC_URL || '',
  PORT = process.env.PORT || 4001
} = process.env

export { NODE_ENV, ELASTIC_URL, PORT }
