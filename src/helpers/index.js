import {
  APPLE_BASKET_POSITIONS,
  APPLE_TREE_POSITIONS,
  BASKET,
} from '../constants'

export function getRandomNumber({ min = 0, max = 0 }) {
  return Math.random() * (max - min) + min
}

export function getApplePositions(count, type = BASKET) {
  const positions = []
  const positionsRange =
    type === BASKET ? APPLE_BASKET_POSITIONS : APPLE_TREE_POSITIONS

  for (let idx = 0; idx < count; idx++) {
    const top = getRandomNumber({ ...positionsRange.top })
    const left = getRandomNumber({ ...positionsRange.left })
    positions.push({ top, left })
  }

  return positions
}

export function makeStylePositions(pos, unit = '%') {
  const newPos = {}
  Object.keys(pos).forEach((k) => {
    newPos[k] = `${pos[k]}${unit}`
  })

  return newPos
}

export function generateApplesArray(count, type = BASKET) {
  const positions = getApplePositions(count, type)

  return positions.map((position) => ({
    id: `id-${Math.random().toString(16).slice(2)}`,
    position,
  }))
}
