import express from 'express'
import router from './routes'
import stylus from 'stylus'

const app = express()

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(stylus.middleware({
  src: './src/styles',
  dest: './stylesheets',
  compile: (src, path) =>
    stylus(src)
      .set('filename', path)
      .set('compress', true)
      .use(require('nib')())
      .import('nib')
}))

app.use('/stylesheets', express.static('./stylesheets'))

app.use(router)

app.start = () => {
  app.listen('3000', () => {
    console.log('Listening on 3000')
  })
}

export default app
