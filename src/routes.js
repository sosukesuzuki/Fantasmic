import Router from 'express-promise-router'
import themeparks from 'themeparks'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

export default router
