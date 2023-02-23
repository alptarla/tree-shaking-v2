import { createSlice } from '@reduxjs/toolkit'
import { APPLES_COUNT } from '../../constants'
import { generateApplesArray } from '../../helpers'

const initialState = {
  applesInTree: generateApplesArray(APPLES_COUNT),
  applesInBasket: [],
  droppedApples: [],
  isTreeShaking: false,
  isApplesDropping: false,
}

export const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    setApplesInTree(state, { payload }) {
      state.applesInTree = payload
    },
    setApplesInBasket(state, { payload }) {
      state.applesInBasket = payload
    },
    addAppleToBasket(state, { payload }) {
      const isAlreadyBasket = state.applesInBasket.some((apple) => {
        return apple.id === payload.id
      })

      if (!isAlreadyBasket) {
        // add to basket
        state.applesInBasket.push(payload)
        // remove from tree
        state.applesInTree = state.applesInTree.filter((apple) => {
          return apple.id !== payload.id
        })
      }
    },
    setDroppedApples(state, { payload }) {
      state.droppedApples = payload
    },
    setIsTreeShaking(state, { payload }) {
      state.isTreeShaking = payload
    },
    setIsApplesDropping(state, { payload }) {
      state.isApplesDropping = payload
    },
    reset(state) {
      state.applesInTree = generateApplesArray(APPLES_COUNT)
      state.applesInBasket = []
      state.droppedApples = []
      state.isTreeShaking = false
      state.isApplesDropping = false
    },
  },
})

export const {
  setApplesInBasket,
  setApplesInTree,
  addAppleToBasket,
  setIsApplesDropping,
  setIsTreeShaking,
  setDroppedApples,
  reset,
} = sceneSlice.actions

export default sceneSlice.reducer
