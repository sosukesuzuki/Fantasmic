import Router from 'express-promise-router'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

export default router
