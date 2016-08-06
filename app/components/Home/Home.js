import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Rewards'} </p>
      <p className={slogan}>{'Making your employees look good'} </p>

    </div>
  )
}
