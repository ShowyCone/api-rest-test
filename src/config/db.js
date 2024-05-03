import mysql from 'mysql'
import { config } from 'dotenv'
config() // Esto cargará las variables de entorno de tu archivo .env

const pool = mysql.createPool({
  connectionLimit: 10, // El límite de conexiones que deseas permitir al mismo tiempo
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
})

pool.getConnection((error, connection) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Conexión a la base de datos exitosa!')
  connection.release()
})

export { pool }
