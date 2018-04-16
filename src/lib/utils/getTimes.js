import themeparks from 'themeparks'

export async function getSeaWaitTimes () {
  const park = new themeparks.Parks.TokyoDisneyResortDisneySea()
  const waitTimes = await park.GetWaitTimes()
  return waitTimes
}

export async function getLandWaitTimes () {
  const park = new themeparks.Parks.TokyoDisneyResortMagicKingdom()
  const waitTimes = await park.GetWaitTimes()
  return waitTimes
}

export async function getSeaOpeningTimes () {
  const park = new themeparks.Parks.TokyoDisneyResortDisneySea()
  const waitTimes = await park.GetOpeningTimes()
  return waitTimes
}

export async function getLandOpeningTimes () {
  const park = new themeparks.Parks.TokyoDisneyResortMagicKingdom()
  const openingTimes = await park.GetOpeningTimes()
  return openingTimes
}
