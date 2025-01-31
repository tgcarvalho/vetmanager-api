# vetmanager-api - Gerenciamento de Pacientes Veterinários

Esta é a API **vetmanager-api** responsável pelo gerenciamento de pacientes em uma clínica veterinária. Ela foi construída utilizando Node.js com Sequelize e um banco de dados SQLite. A API permite o cadastro, atualização, exclusão e consulta de informações de pacientes (animais), agendamentos de consultas, e o gerenciamento de tratamentos e históricos médicos.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Uso](#uso)
  - [Autenticação](#autenticação)
  - [Exemplos de Endpoints](#exemplos-de-endpoints)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Pré-requisitos

- Node.js (versão X.X.X ou superior)
- NPM ou Yarn
- SQLite (banco de dados utilizado para persistência)
- Sequelize (ORM para interação com o banco de dados)
- [Outros pré-requisitos específicos da API]

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/vetmanager-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd vetmanager-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` baseado no arquivo `.env.example` e preencha as variáveis conforme necessário.

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará rodando em `http://localhost:3000` (ou a porta configurada).

## Estrutura de Diretórios

```bash
.
├── src/
│   ├── controllers/          # Controladores para gerenciar a lógica de rotas
│   ├── routes/               # Definições de rotas
│   ├── services/             # Lógica de negócios
│   ├── models/               # Modelos de dados (Schemas com Sequelize)
│   └── config/               # Configurações (ex. banco de dados, etc.)
├── .env.example              # Exemplo de arquivo .env
├── README.md                 # Documentação do projeto
└── package.json              # Configurações e dependências do projeto
```

## Uso

### Autenticação

A API utiliza [JWT/OAuth2] para autenticação. Para obter um token, envie uma solicitação `POST` para o endpoint `/auth/login` com as credenciais do usuário.

#### Exemplo de requisição:

```bash
POST /auth/login
Content-Type: application/json

{
  "username": "usuario",
  "password": "senha"
}
```

#### Exemplo de resposta:

```json
{
  "token": "seu-token-jwt-aqui"
}
```

### Exemplos de Endpoints

#### Criar um paciente (animal)

```bash
POST /patients
Content-Type: application/json
Authorization: Bearer {token}
```

Corpo da requisição:

```json
{
  "name": "Rex",
  "species": "Cachorro",
  "breed": "Vira-lata",
  "age": 5,
  "owner": "João Silva"
}
```

Resposta:

```json
{
  "id": 123,
  "name": "Rex",
  "species": "Cachorro",
  "breed": "Vira-lata",
  "age": 5,
  "owner": "João Silva"
}
```

#### Obter lista de pacientes

```bash
GET /patients
Authorization: Bearer {token}
```

Resposta:

```json
[
  {
    "id": 123,
    "name": "Rex",
    "species": "Cachorro",
    "breed": "Vira-lata",
    "age": 5,
    "owner": "João Silva"
  },
  {
    "id": 124,
    "name": "Miau",
    "species": "Gato",
    "breed": "Persa",
    "age": 3,
    "owner": "Maria Oliveira"
  }
]
```

## Testes

Para rodar os testes, utilize o comando:

```bash
npm run test
# ou
yarn test
```

Os testes estão localizados na pasta `tests/` e utilizam [Jest/Mocha] como framework de testes.

## Deploy

1. Certifique-se de que todas as variáveis de ambiente estão configuradas corretamente.
2. Realize o build da aplicação:

   ```bash
   npm run build
   # ou
   yarn build
   ```

3. Faça o deploy para o ambiente de produção.

## Contribuindo

Se você quiser contribuir com o projeto, siga os passos:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a sua branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
