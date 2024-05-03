import express, { json } from 'express'
import itemRoutes from './routes/itemRoutes.js'
import cors from 'cors' // Asegúrate de instalar el paquete CORS con npm o yarn

const app = express()

// Middleware para parsear JSON
app.use(json())

// Configuración de CORS para permitir solicitudes de cualquier origen
app.use(cors())

// Usar las rutas definidas en itemRoutes.js
app.use(itemRoutes)

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000')
})
