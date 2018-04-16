import Router from 'express-promise-router'
import {
  getSeaWaitTimes,
  getLandWaitTimes,
  getSeaOpeningTimes,
  getLandOpeningTimes
} from './lib/utils/getTimes'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/:park', async (req, res) => {
  const { park } = req.params

  const waitTimes = park === 'sea'
    ? await getSeaWaitTimes()
    : await getLandWaitTimes()

  const times = park === 'sea'
    ? await getSeaOpeningTimes()
    : await getLandOpeningTimes()

  const parkNameJP = park === 'sea'
    ? 'シー'
    : 'ランド'

  const parkNameEN = park

  res.render('park', {parkNameEN, parkNameJP, waitTimes, times})
})

export default router
