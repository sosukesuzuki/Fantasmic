import express from 'express'

const app = express()

app.start = () => {
  app.listen('3000', () => {
    console.log('Listening on 3000')
  })
}

export default app
