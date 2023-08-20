## Add index

```
PUT /jurisprudencia
{
  "settings" : {
      "number_of_shards" : 1
  },
  "mappings": {
    "properties": {
      "id" : { "type" : "integer" },
      "documentId" : { "type" : "text" },
      "artifact" : { "type" : "text" },
      "title": { "type": "text" },
      "body" : { "type" : "text" }
    }
  }
}
```

## Post data
```

POST jurisprudencia/_doc/
{
  "id": 1,
  "documentId": "855190585",
  "artifact": "JURISPRUDENCIA",
  "title": "Supremo Tribunal Federal STF - RECURSO EXTRAORDINÁRIO: RE 600091 MG",
  "body": "EMENTA Recurso extraordinário – Competência – Processual Civil e do Trabalho – Repercussão geral reconhecida – Ação de indenização decorrente de danos sofridos em acidente de trabalho – Demanda diretamente decorrente de relação de trabalho, sendo irrelevante, para fins de fixação da competência, o fato de ter sido ajuizada por sucessores do trabalhador falecido – Aplicação da norma do art. 114, inciso VI, da Constituição Federal, com a redação que a ela foi dada pela Emenda Constitucional nº 45/04 – Reconhecimento da competência da Justiça Federal do Trabalho para o processamento do feito – Recurso não provido."
}

POST jurisprudencia/_doc/
{
  "id": 2,
  "documentId": "932582821",
  "artifact": "JURISPRUDENCIA",
  "title": "TJ-MG - Apelação Cível AC 10000190905844001 MG (TJ-MG)",
  "body": "EMENTA: APELAÇÃO CÍVEL - AÇÃO DE REPARAÇÃO DE DANOS MORAIS- PROTESTO INDEVIDO - DANOS MORAIS - MAJORAÇÃO DO QUANTUM INDENIZATÓRIO. EMENTA: APELAÇÃO CÍVEL - AÇÃO DE REPARAÇÃO DE DANOS MORAIS- PROTESTO INDEVIDO - DANOS MORAIS - MAJORAÇÃO DO QUANTUM INDENIZATÓRIO."
}

POST jurisprudencia/_doc/
{
  "id": 3,
  "documentId": "514504843",
  "artifact": "JURISPRUDENCIA",
  "title": "TST - AGRAVO DE INSTRUMENTO EM RECURSO DE REVISTA AIRR 111344220155150006 (TST)",
  "body": "AGRAVO DE INSTRUMENTO EM RECURSO DE REVISTA. PRESCRIÇÃO. DANO MORAL. BANHEIROS INSUFICIENTES. SUSPEIÇÃO DE TESTEMUNHA. DANOS MORAIS. QUANTIFICAÇÃO DO DANO MORAL. Nega-se provimento ao Apelo quando não preenchidos os requisitos do art. 896 da CLT . Agravo de Instrumento conhecido e não provido."
}

POST jurisprudencia/_doc/
{
  "id": 4,
  "documentId": "872996231",
  "artifact": "JURISPRUDENCIA",
  "title": "TJ-MG - Apelação Cível AC 10000200179265001 MG (TJ-MG)",
  "body": "EMENTA: APELAÇÃO CÍVEL - INDENIZAÇÃO POR DANOS MORAIS E MATERIAIS - COMPANHIA AÉREA - ATRASO DE VOO E EXTRAVIO DE BAGAGEM - DANOS MORAIS - MAJORAÇÃO."
}
```

## Get data:
```
GET jurisprudencia/_search
{
  "query": {
    "match_all": {}
  }
}
```
