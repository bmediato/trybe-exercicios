import mysql from 'mysql2/promise';

const { DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export default mysql.createPool({

});