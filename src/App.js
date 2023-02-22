import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tree from './components/Tree'
import { getApplePositions } from './helpers'
import { setApplesPositions } from './redux/features/sceneSlice'
import classes from './styles/App.module.scss'

function App() {
  const { applesCount } = useSelector((state) => state.scene)
  const dispatch = useDispatch()

  useEffect(() => {
    const positions = getApplePositions(applesCount)
    dispatch(setApplesPositions(positions))
  }, [])

  return (
    <div className={classes.sceneWrapper}>
      <Tree />
    </div>
  )
}

export default App
