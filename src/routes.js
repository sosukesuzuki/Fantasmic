import Router from 'express-promise-router'
import themeparks from 'themeparks'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/:park', async (req, res) => {
  const { park } = req.params
  const disneyPark = park === 'sea'
    ? new themeparks.Parks.TokyoDisneyResortDisneySea()
    : park === 'land'
      ? new themeparks.Parks.TokyoDisneyResortMagicKingdom()
      : ''

  if (disneyPark === '') res.json({error: 'invalid park name.'})

  const waitTimes = await disneyPark.GetWaitTimes()
  const times = await disneyPark.GetOpeningTimes()
  const parkName = park === 'sea'
    ? 'シー'
    : 'ランド'
  res.render('park', {parkName, waitTimes, times})
})

export default router
