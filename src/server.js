import express from 'express'
import path from 'path'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { router } from './routes/router.js'

try {
  const app = express()
  const directoryFullName = dirname(fileURLToPath(import.meta.url))
  app.use(express.static(path.join(directoryFullName, '../../1DV610-L3/static')))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.get('*', (req, res) => {
    res.sendFile(path.join(directoryFullName, '../../1DV610-L3/static/index.html'))
  })

  app.use('/', router)

  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
} catch (e) {
  console.error(e)
  process.exitCode = 1
}
