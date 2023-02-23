import React from 'react'
import Basket from './components/Basket'
import Tree from './components/Tree'
import classes from './styles/App.module.scss'

function App() {
  return (
    <div className={classes.sceneWrapper}>
      <Tree />
      <Basket className={classes.basket} />
    </div>
  )
}

export default App
