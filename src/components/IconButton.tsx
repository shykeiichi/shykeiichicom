import React from 'react'
import styles from "../../styles/components/IconButton.module.css"

const IconButton = (props) => {
  return (
    <div className={styles.container} onClick={props.click}>{props.icon}</div>
  )
}

export default IconButton