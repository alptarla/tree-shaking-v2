import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Basket from './components/Basket'
import Button from './components/Button'
import Tree from './components/Tree'
import { APPLES_COUNT } from './constants'
import { reset } from './redux/features/sceneSlice'
import classes from './styles/App.module.scss'

function App() {
  const { applesInBasket } = useSelector((state) => state.scene)
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(reset())
  }

  const isGameOver = applesInBasket.length === APPLES_COUNT

  return (
    <div className={classes.sceneWrapper}>
      <Tree />
      <div className={classes.sceneRightWrapper}>
        <Button
          disabled={!isGameOver}
          onClick={handleRestart}
        >
          Restart
        </Button>
        <Basket />
      </div>
    </div>
  )
}

export default App
