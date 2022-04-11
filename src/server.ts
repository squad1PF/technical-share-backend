import express from 'express'
import { usersRoutes } from './routes/users.routes'
import { skillsRoutes } from './routes/skills.routes'
import { senioritiesRoutes } from './routes/seniority.routes'

import './database'

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/skills', skillsRoutes)
app.use('/seniority', senioritiesRoutes)

app.listen(3333, () => console.log('Server is running!'))
