import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'

import { PORT } from './config/constants'
import { typeDefs } from './types'
import { resolvers } from './resolvers'

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
})

server
  .listen({ port: PORT })
  .then(({ url }) => {
    console.log(`Search graphql ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
