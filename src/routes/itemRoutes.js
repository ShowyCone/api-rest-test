import { pool } from '../config/db.js' // Asegúrate de exportar 'pool' en lugar de 'db'
import express from 'express'

const router = express.Router()

router.get('/api/items', (req, res) => {
  pool.query('SELECT * FROM product', (error, results) => {
    if (error) {
      console.error(error)
      res.status(500).send('Ocurrió un error al realizar la consulta')
      return
    }
    res.json(results)
  })
})

router.put('/api/items/:id', (req, res) => {
  const { id } = req.params
  const { name, description, image, price } = req.body

  pool.query(
    'UPDATE product SET name = ?, description = ?, image = ?, price = ? WHERE id = ?',
    [name, description, image, price, id],
    (error, results) => {
      if (error) {
        console.error(error)
        res.status(500).send('Ocurrió un error al actualizar el producto')
        return
      }
      res.send('Producto actualizado con éxito')
    }
  )
})

router.post('/api/items', (req, res) => {
  const { name, description, image, price } = req.body

  pool.query(
    'INSERT INTO product (name, description, image, price) VALUES (?, ?, ?, ?)',
    [name, description, image, price],
    (error, results) => {
      if (error) {
        console.error(error)
        res.status(500).send('Ocurrió un error al crear el producto')
        return
      }
      res.status(201).send('Producto creado con éxito')
    }
  )
})

export default router
