import React, { useEffect } from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  setApplesPositions,
  setIsDropping,
  setIsShaking,
} from '../../redux/features/sceneSlice'
import classNames from 'classnames'
import Apple from '../Apple'
import { makeStylePositions } from '../../helpers'

function Tree() {
  const droppedApples = [1, 3, 7, 4]

  const { isShaking, applesPositions, isDropping } = useSelector(
    (state) => state.scene
  )
  const dispatch = useDispatch()

  const handleTreeClick = () => {
    dispatch(setIsShaking(true))

    setTimeout(() => {
      dispatch(setIsShaking(false))
      dispatch(setIsDropping(true))
    }, [3000])
  }

  const treeClassName = classNames(classes.treeWrapper, {
    [classes.isShaking]: isShaking,
  })

  useEffect(() => {
    if (!isDropping) return

    const newPos = applesPositions.map((pos, i) => {
      if (droppedApples.includes(i)) return { left: pos.left, bottom: 0 }
      return pos
    })

    dispatch(setApplesPositions([...newPos]))
  }, [isDropping])

  return (
    <Button
      onClick={handleTreeClick}
      variant='ghost'
      className={treeClassName}
    >
      <TreeSVG className={classes.tree} />
      {applesPositions.map((pos, idx) => (
        <Apple
          key={idx}
          position={makeStylePositions(pos)}
        />
      ))}
    </Button>
  )
}

export default Tree
