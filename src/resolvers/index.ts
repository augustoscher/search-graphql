import searchClient from "../client/search";

export const resolvers = {
  SearchResult: {
    relatedDocument(searchResult) {
      return {
        // Allow data fetch from document subgraph.
        // This will trigger __resolveReference resolver in Document type in document domain graph service
        __typename: "Document",
        id: searchResult.documentId,
      };
    },
  },
  Query: {
    search: (_, args) => {
      return searchClient.search(args);
    },
  },
};
