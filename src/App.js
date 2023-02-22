import React from 'react'
import Tree from './components/Tree'
import classes from './styles/App.module.scss'

function App() {
  return (
    <div className={classes.sceneWrapper}>
      <Tree />
    </div>
  )
}

export default App
