import React from 'react'
import TreeSVG from '../../assets/cartoon-tree.svg'
import Button from '../Button'
import classes from './Tree.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsShaking } from '../../redux/features/sceneSlice'
import classNames from 'classnames'

function Tree() {
  const { isShaking } = useSelector((state) => state.scene)
  const dispatch = useDispatch()

  const handleTreeClick = () => {
    dispatch(setIsShaking(true))

    setTimeout(() => {
      dispatch(setIsShaking(false))
    }, [3000])
  }

  const treeClassName = classNames(classes.tree, {
    [classes.isShaking]: isShaking,
  })

  return (
    <Button
      onClick={handleTreeClick}
      variant='ghost'
      className={treeClassName}
    >
      <TreeSVG />
    </Button>
  )
}

export default Tree
