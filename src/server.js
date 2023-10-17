import express from 'express'
import path from 'path'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { router } from './routes/router.js'



try {
  const app = express()
  const directoryFullName = dirname(fileURLToPath(import.meta.url))
  app.use(express.static(path.join(directoryFullName, '../../client/build')))


  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sessionOptions.cookie.secure = true // serve secure cookies
  }

  
  app.use(express.urlencoded({ extended: false }))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(directoryFullName, '../../client/build/index.html'))
  })

  app.use('/', router)

  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
} catch (e) {
  console.error(e)
  process.exitCode = 1
}