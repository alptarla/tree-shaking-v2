import React from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'

function Tree() {
  const handleClick = () => {
    console.log('clicked to tree')
  }

  return (
    <Button
      onClick={handleClick}
      variant='ghost'
      className={classes.tree}
    >
      <TreeSVG />
    </Button>
  )
}

export default Tree
