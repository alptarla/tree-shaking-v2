import { APPLE_POSITIONS } from '../constants'

export function getRandomNumber({ min = 0, max = 0 }) {
  return Math.random() * (max - min) + min
}

export function getApplePositions(count) {
  const positions = []

  for (let idx = 0; idx < count; idx++) {
    const top = getRandomNumber({ ...APPLE_POSITIONS.top })
    const left = getRandomNumber({ ...APPLE_POSITIONS.left })
    positions.push({ top, left })
  }

  return positions
}

export function makeStylePositions(pos) {
  const newPos = {}
  Object.keys(pos).forEach((k) => {
    newPos[k] = `${pos[k]}%`
  })

  return newPos
}
