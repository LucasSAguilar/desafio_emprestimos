# Desafio: Empréstimos
Link: https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md


O desafio é implementar um serviço que determine quais modalidades de empréstimo uma pessoa tem acesso.

## Exemplo

As modalidades de empréstimo que serão analisadas são:

- **Empréstimo pessoal**: Taxa de juros de 4%.
- **Empréstimo consignado**: Taxa de juros de 2%.
- **Empréstimo com garantia**: Taxa de juros de 3%.

As modalidades de empréstimo disponíveis para uma pessoa são baseadas em algumas variáveis específicas, são elas:

- **Idade**
- **Salário**
- **Localização**

Seu serviço recebe uma chamada para determinar quais modalidades de empréstimo uma pessoa tem acesso.

**[POST]** `{{host}}/customer-loans`

```json
{
    "idade": 26,
    "cpf": "275.484.389-23",
    "nome": "Nome exemplo",
    "renda": 7000.00,
    "localizacao": "SP"
}
```

Seu serviço deve retornar uma resposta contendo o nome do cliente e uma lista de empréstimos aos quais ele tem acesso,
com os respectivos tipos e taxas de juros.

```
HTTP/1.1 200 Ok
```

```json
{
    "nome": "Nome exemplo",
    "emprestimos": [
        {
            "tipo": "PERSONAL",
            "taxa_juros": 4
        },
        {
            "tipo": "GUARANTEED",
            "taxa_juros": 3
        },
        {
            "tipo": "CONSIGNMENT",
            "taxa_juros": 2
        }
    ]
}
```

## Requisitos

- Conceder o empréstimo pessoal se o salário do cliente for inferior a R$ 3000.
- Conceder o empréstimo pessoal se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30
  anos e residir em São Paulo (SP).
- Conceder o empréstimo consignado se o salário do cliente for igual ou superior a R$ 5000.
- Conceder o empréstimo com garantia se o salário do cliente for igual ou inferior a R$ 3000.
- Conceder o empréstimo com garantia se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver
  menos de 30 anos e residir em São Paulo (SP).

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.