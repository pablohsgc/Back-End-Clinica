# TP2-EngSoft
## Grupo 2
 - GUILHERME NOGUEIRA COELHO, 20183011834
 - ELAINE RODRIGUES DOS SANTOS, 201322040494
 - PABLO HENRIQUE SANTOS, 20183012250

## Informações importantes
- Ao clonar o repositório, entre na pasta TP2-Typescript e execute o comando **npm i**, para que o npm instale todas as dependencias do projeto.
- O arquivo .env deve ser adicionado na pasta TP2-Typescript para o correto funcionamento. O arquivo contem a url do banco de dados e uma secret jwt.
- Para testar em modo de desenvolvimento, basta executar o comando **npm run dev**. O servidor BackEnd irá rodar na porta 5000.
- Após rodar o servidor Back End, clone o repositório do Front End, contido em https://github.com/pablohsgc/Front-End-TP2 e siga as instruções de execução do projeto.
- O Front será executado na porta 3000, e o Back End na porta 5000. 

## Funcionamento do BackEnd
### Rotas
#### **get:** /agendamentos
    - Essa rota serve para listar e cadastrar os agendamentos.
    - Para o cadastro são necessários os seguintes parametros que devem ser enviados em um json pelo método post:
        - data (mês-dia-ano)
        - horario (apenas a hora, sem minutos)
        - nome
        - email
        - telefone
        - codigoMedico
    - Para ver os agendamentos de um determinado médico, os seguintes parametros que devem ser enviados em um json pelo método post:
        - codigoMedico
        - data (ano-mes-dia)
    - Para ver os horários livres de um determinado médico, os seguintes parametros que devem ser enviados em um json pelo método post:
        - codigoMedico
        - data (ano-mes-dia)
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

###
