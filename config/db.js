# Recriar o config/db.js corretamente com conteúdo real de conexão
db_js_path = Path("/mnt/data/db.js")
conteudo_db_js = """
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Coloque sua senha aqui
  database: 'db_tarefas'
});

connection.connect(error => {
  if (error) {
    console.error('Erro na conexão ao banco de dados:', error);
    return;
  }
  console.log('Conectado ao banco de dados MySQL com sucesso!');
});

module.exports = connection;
"""
db_js_path.write_text(conteudo_db_js, encoding="utf-8")

db_js_path
