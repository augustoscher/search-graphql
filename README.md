# search-graphql
Search Domain Graph Service (DGS), corresponding to the search domain from [Supergraph](https://github.com/augustoscher/supergraph).
Responsible of searching data in Elasticsearch cluster.
It's builded with [Apollo Federation](https://www.apollographql.com/docs/federation/) v2 which is an open source architecture for building a distributed graph.

## Requirements

It's possible to run application inside docker. But also, it's possible to run in your local machine. In this case, make sure that following apps are installed:

- Node v16
- Elasticsearch
- Kibana

elastic:
```
docker network create elastic

docker run -d --name es01-test --net elastic -p 127.0.0.1:9200:9200 -p 127.0.0.1:9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.17.12
```

kibana:
```
docker run -d --name kib01-test --net elastic -p 127.0.0.1:5601:5601 -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" docker.elastic.co/kibana/kibana:7.17.12
```

See the [docs](https://www.elastic.co/guide/en/kibana/7.17/docker.html).


## Running

To run application, just type:

```
yarn dev
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


