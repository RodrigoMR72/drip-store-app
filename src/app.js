import express from 'express'
import { routes } from './routes/index.js'

const app = express()

export default app.use(
    express.urlencoded({
        extended: true
    })
)

routes(app)