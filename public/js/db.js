
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_tarefas'
});
connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco MySQL!');
});
module.exports = connection;
