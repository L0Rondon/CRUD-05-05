
# Projeto Web com Node.js, MVC, CRUD e MySQL

## 📁 Estrutura Geral do Projeto
```
/config           → Arquivos de configuração (ex: conexão com MySQL)
/models           → Modelos (comandos SQL que interagem com o banco)
/controllers      → Lógica de controle entre Model e View
/routes           → Define as rotas da aplicação
/public
  ├── /pages       → Arquivos HTML visíveis no navegador
  ├── /css         → Arquivos de estilo (CSS)
  └── /js          → Scripts (JavaScript)
app.js            → Arquivo principal do servidor
/db_tarefas.sql   → Script SQL para criar o banco de dados
```

## 🔄 Fluxo de Funcionamento com Arquitetura MVC

1. Usuário acessa uma página HTML (ex: `login.html`, `tarefa.html`).
2. O formulário envia os dados via POST para uma rota (ex: `/login`, `/tarefas`).
3. A rota (em `/routes`) chama um controller que processa a lógica.
4. O controller chama um model (ex: `tarefaModel`) que acessa o banco de dados via comandos SQL.
5. O model retorna os dados para o controller, que responde ao navegador.

## 📌 Componentes-Chave

### ✅ Login e Sessão
- Implementado com `express-session`.
- Senhas criptografadas com `bcryptjs`.
- Middleware `verificaLogin` protege rotas privadas.

### ✅ CRUD de Tarefas e Responsáveis
- Cadastro, listagem, edição e exclusão de tarefas e responsáveis.
- Ações no Controller, comandos SQL no Model.
- Rotas separadas por entidade (`/tarefas`, `/responsaveis`).

### ✅ Conexão com Banco de Dados
- MySQL usado com a biblioteca `mysql2`.
- Estrutura do banco:
  - `usuarios`: login
  - `responsaveis`: responsáveis pelas tarefas
  - `tarefas`: tarefas com vínculo ao responsável

### ✅ HTML + CSS + JS
- Interface simples e didática.
- CSS unificado em `style.css`.
- JS (`main.js`) carrega tarefas na tabela com `fetch()`.

## 🔐 Segurança
- Sessão com cookies (sem token JWT).
- Senhas com bcrypt.
- Rotas protegidas por middleware.

## 💾 Banco de Dados
Use o script `db_tarefas.sql` no MySQL:

```sql
source /caminho/para/db_tarefas.sql;
```

## 🧪 Testando o Projeto

1. Crie o banco com o script SQL.
2. Instale dependências:
```bash
npm install express mysql2 express-session bcryptjs body-parser
```
3. Rode o servidor:
```bash
node app.js
```
4. Acesse:
```
http://localhost:3000/login
```
