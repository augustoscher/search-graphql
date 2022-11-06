import { gql } from "apollo-server";

export const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0")

  type SearchResult {
    id: ID!
    documentId: ID!
    title: String!
    artifact: String!
    body: String
    createdAt: String
    relatedDocument: Document
  }

  type Query {
    search(
      artifact: String!
      q: String!
      from: Number
      size: Number
    ): [SearchResult]
  }
`;
