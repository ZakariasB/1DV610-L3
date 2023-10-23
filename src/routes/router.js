/**
 * The routes.
 *
 * @author Zakarias Bergcrona
 * @version 1.0.0
 */

import express from 'express'
import { router as weatherRouter } from './weather-router.js'

export const router = express.Router()

router.use('/api', weatherRouter)
