# search-graphql
Search Domain Graph Service (DGS), corresponding to the search domain from [Jus Edge GraphQL](https://github.com/augustoscher/jus-edge-graphql).
Responsible of searching data in Elasticsearch cluster.
It's builded with [Apollo Federation](https://www.apollographql.com/docs/federation/) v2 which is an open source architecture for building a distributed graph.

## Requirements

It's possible to run application inside docker. But also, it's possible to run in your local machine. In this case, make sure that following apps are installed:

- Node v16
- Elasticsearch

## Running

To run application, just type:

```
yarn dev
```
or in docker:
```
make dev
```

Search GraphQL will be running on [localhost:4001/graphql](http://localhost:4001/graphql)


## Example

This query should fetch data from elasticsearch. Note that we don't have access of fields from other subgraphs.

```gql
query Search($artifact: String!, $q: String!) {
  search(artifact: $artifact, q: $q) {
    id
    documentId
    title
    body
    relatedDocument {
      documentId
      # mandatoryPrecedent isn't available in search subgaph
    }
  }
}

# variables
{
  "artifact": "JURISPRUDENCIA",
  "q": "danos morais"
}

```
