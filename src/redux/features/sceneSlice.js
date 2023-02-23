import { createSlice } from '@reduxjs/toolkit'
import { APPLES_COUNT, BASKET, TREE } from '../../constants'
import { generateApplesArray } from '../../helpers'

const initialState = {
  applesInTree: generateApplesArray(APPLES_COUNT, TREE),
  applesInBasket: generateApplesArray(APPLES_COUNT, BASKET),
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
    setIsTreeShaking(state, { payload }) {
      state.isTreeShaking = payload
    },
    setIsApplesDropping(state, { payload }) {
      state.isApplesDropping = payload
    },
  },
})

export const {
  setApplesInBasket,
  setApplesInTree,
  addAppleToBasket,
  setIsApplesDropping,
  setIsTreeShaking,
} = sceneSlice.actions

export default sceneSlice.reducer
