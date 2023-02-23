import React from 'react'
import BasketSvg from '../../assets/garden-basket.svg'
import classes from './Basket.module.scss'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Apple from '../Apple'
import { makeStylePositions } from '../../helpers'
import classNames from 'classnames'

function Basket({ className }) {
  const { applesInBasket } = useSelector((state) => state.scene)

  return (
    <div className={classNames(classes.basketWrapper, className)}>
      {applesInBasket.map((apple) => (
        <Apple
          key={apple.id}
          position={makeStylePositions(apple.position)}
        />
      ))}
      <BasketSvg className={classes.basket} />
    </div>
  )
}

Basket.propTypes = {
  className: PropTypes.string,
}

export default Basket
