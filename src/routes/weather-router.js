import express from 'express'

import { WeatherController } from '../controllers/weather-controller.js'

export const router = express.Router()

const controller = new WeatherController()

router.post('/weather', (req, res, next) => controller.getWeather(req, res, next))