/**
 * @format
 */

import React from 'react'
import style from './style.module.scss'
const ContainerPage = (props) => {
  return <div className={style.root}>{props.children}</div>
}

export default ContainerPage
