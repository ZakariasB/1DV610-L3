/**
 * The routes.
 *
 * @author Zakarias Bergcrona
 * @version 1.0.0
 */

import express from 'express'


export const router = express.Router()

router.use('/weather', weatherRouter)


router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})