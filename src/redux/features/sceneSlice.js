import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice({
  name: 'tree',
  initialState: {
    applesCount: 10,
    isShaking: false,
  },
  reducers: {
    setIsShaking(state, { payload }) {
      state.isShaking = payload
    },
  },
})

export const { setIsShaking } = sceneSlice.actions

export default sceneSlice.reducer
