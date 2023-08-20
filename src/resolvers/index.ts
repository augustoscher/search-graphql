import searchClient from '../client/search'

export const resolvers = {
  SearchResult: {
    relatedDocument(searchResult) {
      console.log(
        `[search-graphql]: resolve reference for ${searchResult.documentId} ond Document domain graph`
      )
      return {
        // Allow data fetch from document subgraph.
        // This will trigger __resolveReference resolver in Document type in document domain graph service
        __typename: 'Document',
        documentId: searchResult.documentId,
        artifact: searchResult.artifact
      }
    }
  },
  Query: {
    search: (_, args) => {
      // For the sake of simplicity, we're calling ES client directly, but it could be an api call.
      console.log(`[search-graphql]: searching in ES`)
      return searchClient.search(args)
    }
  }
}
