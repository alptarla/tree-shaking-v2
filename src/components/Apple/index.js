import React from 'react'
import AppleSVG from '../../assets/fresh-apple-icon.svg'
import classes from './Apple.module.scss'
import PropTypes from 'prop-types'

const DEFAULT_POSITION = {
  top: 0,
  left: 0,
}

function Apple({ position = DEFAULT_POSITION, onAppleDropped }) {
  return (
    <AppleSVG
      style={{ ...position }}
      className={classes.apple}
      onTransitionEnd={onAppleDropped}
    />
  )
}

Apple.propTypes = {
  position: PropTypes.object,
  onAppleDropped: PropTypes.func,
}

export default Apple
