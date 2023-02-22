import { configureStore } from '@reduxjs/toolkit'
import sceneSlice from './features/sceneSlice'

export default configureStore({
  reducer: {
    scene: sceneSlice,
  },
})
