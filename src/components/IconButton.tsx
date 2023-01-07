import React from 'react'
import styles from "../../styles/components/IconButton.module.css"
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IconButtonProps {
  click: () => void;
  icon: any;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <div className={styles.container} onClick={props.click}>{props.icon}</div>
  )
}

export default IconButton