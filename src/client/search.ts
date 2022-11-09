import elasticsearch from 'elasticsearch'
import { ELASTIC_URL } from '../config/constants'

type SearchArgs = {
  q: string
  artifact: string
  from?: number
  size?: number
}

class SearchClient {
  protected elasticClient: elasticsearch.Client
  protected artifactMap: Map<string, string[]>

  constructor() {
    this.elasticClient = new elasticsearch.Client({
      host: ELASTIC_URL,
      log: 'trace'
    })
    this.artifactMap = new Map([
      [
        'GENERAL',
        [
          'JURISPRUDENCIA',
          'SUMULA',
          'MODELOS',
          'PECAS',
          'ARTIGOS',
          'NOTICIAS',
          'LEGISLACAO'
        ]
      ],
      ['JURISPRUDENCIA', ['JURISPRUDENCIA']]
    ])
  }

  async search({ artifact, q, from, size }: SearchArgs) {
    const data = await this.elasticClient.search({
      index: this.artifactMap.get(artifact),
      from,
      size,
      body: {
        query: {
          match: {
            body: q
          }
        }
      }
    })

    return data
  }
}

export default new SearchClient()
