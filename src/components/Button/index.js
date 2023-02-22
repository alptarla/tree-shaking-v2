import React from 'react'
import classes from './Button.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function Button(props) {
  const { variant = 'primary', children, ...rest } = props

  const buttonClassName = classNames(
    rest.className,
    classes.button,
    classes[variant]
  )

  return (
    <button
      {...rest}
      className={buttonClassName}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
}

export default Button
