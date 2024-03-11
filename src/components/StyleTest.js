import React from 'react'
import styles from '../css/styleText.module.css'
export default function StyleTest() {
  return (
    <div>
        <p className={styles.bigRed}>Hello</p>
        <p className={styles.bigBlue}>World</p>

    </div>
  )
}
