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
          'jurisprudencia',
          'sumula',
          'modelos',
          'pecas',
          'artigos',
          'noticias',
          'legislacao'
        ]
      ],
      ['JURISPRUDENCIA', ['jurisprudencia']]
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

    return (data?.hits?.hits || []).map((res) => res._source)
  }

  async index() {
    await this.elasticClient.index({
      index: 'jurisprudencia',
      type: 'document',
      body: {
        id: '1',
        documentId: '6365742a63431fce0dc88e4e',
        title:
          'Supremo Tribunal Federal STF - RECURSO EXTRAORDINÁRIO: RE 600091 MG',
        artifact: 'JURISPRUDENCIA',
        body: 'EMENTA Recurso extraordinário – Competência – Processual Civil e do Trabalho – Repercussão geral reconhecida – Ação de indenização decorrente de danos sofridos em acidente de trabalho – Demanda diretamente decorrente de relação de trabalho, sendo irrelevante, para fins de fixação da competência, o fato de ter sido ajuizada por sucessores do trabalhador falecido – Aplicação da norma do art. 114, inciso VI, da Constituição Federal, com a redação que a ela foi dada pela Emenda Constitucional nº 45/04 – Reconhecimento da competência da Justiça Federal do Trabalho para o processamento do feito – Recurso não provido.'
      }
    })
  }
}

export default new SearchClient()
