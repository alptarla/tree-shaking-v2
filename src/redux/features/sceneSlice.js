import { createSlice } from '@reduxjs/toolkit'
import { APPLES_COUNT } from '../../constants'

export const sceneSlice = createSlice({
  name: 'tree',
  initialState: {
    applesCount: APPLES_COUNT,
    applesPositions: [],
    isShaking: false,
    isDropping: false,
  },
  reducers: {
    setIsShaking(state, { payload }) {
      state.isShaking = payload
    },
    setIsDropping(state, { payload }) {
      state.isDropping = payload
    },
    setApplesPositions(state, { payload }) {
      state.applesPositions = payload
    },
  },
})

export const { setIsShaking, setIsDropping, setApplesPositions } =
  sceneSlice.actions

export default sceneSlice.reducer
