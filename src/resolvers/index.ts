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
      // For the sake of simplicity, we're calling ES client directly, but it could be an api call.
      return searchClient.search(args);
    },
  },
};
