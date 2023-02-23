import React from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  setIsApplesDropping,
  setIsTreeShaking,
} from '../../redux/features/sceneSlice'
import classNames from 'classnames'
import Apple from '../Apple'
import { makeStylePositions } from '../../helpers'

function Tree() {
  const { applesInTree, isTreeShaking } = useSelector((state) => state.scene)
  const dispatch = useDispatch()

  const handleTreeClick = () => {
    dispatch(setIsTreeShaking(true))

    setTimeout(() => {
      dispatch(setIsTreeShaking(false))
      dispatch(setIsApplesDropping(true))
    }, [3000])
  }

  const treeClassName = classNames(classes.treeWrapper, {
    [classes.isShaking]: isTreeShaking,
  })

  return (
    <Button
      onClick={handleTreeClick}
      variant='ghost'
      className={treeClassName}
    >
      <TreeSVG className={classes.tree} />
      {applesInTree.map((apple) => (
        <Apple
          key={apple.id}
          position={makeStylePositions(apple.position)}
        />
      ))}
    </Button>
  )
}

export default Tree
