import express from 'express'
import dotenv from 'dotenv'
import { usersRoutes } from './routes/users.routes'
import { skillsRoutes } from './routes/skills.routes'
import { mentorshipsRoutes } from './routes/mentorships.routes'

import './database'

const app = express()

dotenv.config()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/skills', skillsRoutes)
app.use('/mentorships', mentorshipsRoutes)


app.listen(process.env.PORT || 3333, () => console.log('Server is running!'))
