import React, { useMemo } from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsShaking } from '../../redux/features/sceneSlice'
import classNames from 'classnames'
import Apple from '../Apple'

const APPLE_POSITION = {
  top: {
    min: 4,
    max: 12,
  },
  left: {
    min: 7,
    max: 23,
  },
}

function getRandomNumber({ min = 0, max = 0 }) {
  return Math.random() * (max - min) + min
}

function Tree() {
  const { isShaking, applesCount } = useSelector((state) => state.scene)
  const dispatch = useDispatch()

  const handleTreeClick = () => {
    dispatch(setIsShaking(true))

    setTimeout(() => {
      dispatch(setIsShaking(false))
    }, [3000])
  }

  const appleElements = useMemo(() => {
    const elements = []

    for (let appleIdx = 0; appleIdx < applesCount; appleIdx++) {
      const posTop = getRandomNumber({ ...APPLE_POSITION.top })
      const posLeft = getRandomNumber({ ...APPLE_POSITION.left })

      elements.push(
        <Apple
          key={appleIdx}
          position={{
            top: `${posTop}rem`,
            left: `${posLeft}rem`,
          }}
        />
      )
    }

    return elements
  }, [applesCount])

  const treeClassName = classNames(classes.treeWrapper, {
    [classes.isShaking]: isShaking,
  })

  return (
    <Button
      onClick={handleTreeClick}
      variant='ghost'
      className={treeClassName}
    >
      <TreeSVG className={classes.tree} />
      {appleElements}
    </Button>
  )
}

export default Tree
