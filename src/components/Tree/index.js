import React from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAppleToBasket,
  setApplesInTree,
  setDroppedApples,
  setIsApplesDropping,
  setIsTreeShaking,
} from '../../redux/features/sceneSlice'
import classNames from 'classnames'
import Apple from '../Apple'
import { getRandomNumber, makeStylePositions } from '../../helpers'

function Tree() {
  const { applesInTree, isTreeShaking, droppedApples } = useSelector(
    (state) => state.scene
  )
  const dispatch = useDispatch()

  const treeClassName = classNames(classes.treeWrapper, {
    [classes.isShaking]: isTreeShaking,
  })

  const isTreeDisabled =
    isTreeShaking || !applesInTree.length || droppedApples.length

  const dropApples = () => {
    dispatch(setIsApplesDropping(true))

    // picks random apples
    const randomDroppedApples = []
    const randomCount = getRandomNumber({ min: 1, max: 10 })
    for (let i = 0; i < randomCount; i++) {
      const randomIndex = getRandomNumber({
        min: 0,
        max: applesInTree.length - 1,
      })

      randomDroppedApples.push(applesInTree[randomIndex])
      dispatch(setDroppedApples([...randomDroppedApples]))
    }

    const newApples = applesInTree.map((apple) => {
      const isDropped = randomDroppedApples.some((a) => a.id === apple.id)
      if (isDropped) {
        // change the apple position as dropping
        return {
          ...apple,
          position: {
            ...apple.position,
            top: 100,
          },
        }
      }
      return apple
    })

    dispatch(setApplesInTree(newApples))
  }

  const handleTreeClick = () => {
    dispatch(setIsTreeShaking(true))

    setTimeout(() => {
      dispatch(setIsTreeShaking(false))
      dropApples()
    }, [3000])
  }

  const handleApplesDropped = () => {
    // when apples dropped set to basket them after 1 seconds
    setTimeout(() => {
      droppedApples.forEach((apple) => {
        dispatch(addAppleToBasket(apple))
        dispatch(setDroppedApples([]))
      })
    }, [1000])
  }

  return (
    <Button
      onClick={handleTreeClick}
      variant='ghost'
      className={treeClassName}
      disabled={isTreeDisabled}
    >
      <TreeSVG className={classes.tree} />
      {applesInTree.map((apple) => (
        <Apple
          key={apple.id}
          position={makeStylePositions(apple.position)}
          onAppleDropped={handleApplesDropped}
        />
      ))}
    </Button>
  )
}

export default Tree
