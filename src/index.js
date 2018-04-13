import express from 'express'
import router from './routes'

const app = express()

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(router)

app.start = () => {
  app.listen('3000', () => {
    console.log('Listening on 3000')
  })
}

export default app
