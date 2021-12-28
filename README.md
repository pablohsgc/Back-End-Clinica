# TP2-EngSoft

## Informações importantes
- Ao clonar o repositório, entre na pasta TP2-Typescript e execute o comando **npm i**, para que o npm instale todas as dependencias do projeto.
- Para testar em modo de desenvolvimento, basta executar o comando **npm run dev**.

## Funcionamento do BackEnd
### Rotas
#### **get:** /agendamentos
    Essa rota serve para listar os agendamentos.
#### **get:** /funcionarios
    Essa rota serve para listar os funcionarios cadastrados no banco de dados.
#### **post:** /funcionarios
    - Essa rota serve para cadastrar os funcionarios no banco de dados.
    - Para o cadastro são necessários os seguintes parametros que devem ser enviados em um json pelo método post:
        - nome
        - email
        - telefone
        - cep
        - logradouro
        - bairro
        - cidade
        - estado
        - dataContrato
        - salario
        - senhaHash
#### **get:** /medicos
    Essa rota serve para listar os medicos cadastrados no banco de dados.
#### **post:** /medicos
    - Essa rota serve para cadastrar os medicos no banco de dados.
    - Para o cadastro são necessários os seguintes parametros que devem ser enviados em um json pelo método post:
        - nome
        - email
        - telefone
        - cep
        - logradouro
        - bairro
        - cidade
        - estado
        - dataContrato
        - salario
        - senhaHash
        - especialidade
        - crm
#### **get:** /pacientes
    Essa rota serve para listar os pacientes cadastrados no banco de dados.
#### **post:** /pacientes
    - Essa rota serve para cadastrar os pacientes no banco de dados.
    - Para o cadastro são necessários os seguintes parametros que devem ser enviados em um json pelo método post:
        - nome
        - email
        - telefone
        - cep
        - logradouro
        - bairro
        - cidade
        - estado
        - peso
        - altura
        - tipoSanguineo

