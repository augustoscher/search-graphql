import { gql } from 'apollo-server'

export const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Document @key(fields: "documentId") {
    documentId: String!
  }

  type SearchResult {
    id: ID!
    documentId: String!
    title: String!
    artifact: String!
    body: String
    createdAt: String
    relatedDocument: Document
  }

  type Query {
    search(artifact: String!, q: String!, from: Int, size: Int): [SearchResult]
  }
`
