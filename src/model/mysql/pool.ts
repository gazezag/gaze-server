import mysql from 'mysql';
import mysqlConfing from './mysqlConfig';

const pool = mysql.createPool(mysqlConfing);

pool.on('connection', connection => {
  // TODO
  // init
  // connection.query('');
});

pool.on('release', connection => {
  console.log('Connection %d released', connection.threadId);
});

export default pool;
