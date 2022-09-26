import styles from './axion.module.css'
import React from 'react'

const AxionSVG = () => {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="60 100 280 320"
    >
      <linearGradient
        id="linear-gradient"
        x1="722.15"
        y1="544.65"
        x2="76.11"
        y2="147.08"
        gradientTransform="matrix(0, -1, -1, 0, 969.05, 970.9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00aeef" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>

      <linearGradient
        id="linear-gradient-2"
        x1="646.97"
        y1="835.67"
        x2="309.02"
        y2="284.65"
        gradientTransform="matrix(0, -1, -1, 0, 969.05, 970.9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3499cc" />
        <stop offset="1" stopColor="#2e3192" />
      </linearGradient>

      <g data-name="SHOP67">
        <rect className={styles.arm} width="400" height="400" />
      </g>

      <g id="Layer_2" className={styles.arm} data-name="Layer 2">
        <path
          className={styles.arm}
          d="M939.94,227.43V543.54c0,22.12-8.53,43-23,56.19L806.15,701.11h0L521.82,961.29c-20.36,18.64-48.32,18.64-68.68,0L168.81,701.11,388.59,500l80.14,73.35c11.12,10.17,26.38,10.17,37.49,0L586.37,500,806.15,298.88h0L906.57,207C920.33,194.39,939.94,206.41,939.94,227.43Z"
        />
        <path
          className={styles.arm}
          d="M806.15,298.88,586.37,500l-80.15-73.34c-11.11-10.17-26.37-10.17-37.49,0L388.58,500,168.81,701.11h0l-98.9,90.5L68.38,793C54.63,805.59,35,793.58,35,772.56V456.47c0-22.13,8.53-43,23-56.23L168.81,298.88,453.11,38.72c20.38-18.65,48.36-18.65,68.73,0Z"
        />
        <polygon
          className={styles.arm}
          points="806.15 298.88 586.37 499.99 779.79 274.76 806.15 298.88"
        />
        <polygon
          className={styles.arm}
          points="168.81 701.11 388.58 499.99 195.17 725.23 168.81 701.11"
        />
      </g>
    </svg>
  )
}

export default AxionSVG
