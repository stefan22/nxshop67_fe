import React from 'react'
const SkeleLoader = () => (
  <>
    <svg
      style={{
        mixBlendMode: 'lighten',
        transform: 'skewX(10deg) translateX(-15px)'
      }}
      speed={1}
      width={340}
      height={384}
      viewBox="0 0 340 90"
    >
      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="0"
        y="34"
        rx="2"
        ry="2"
        width="150"
        height="3"
      />
      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="0"
        y="40"
        rx="2"
        ry="2"
        width="150"
        height="11"
      />
      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)',
          filter: 'drop-shadow(0 1px 3px #acacac29)'
        }}
        x="0"
        y="58"
        rx="2"
        ry="2"
        width="667"
        height="41"
      />
      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="0"
        y="105"
        rx="2"
        ry="2"
        width="667"
        height="41"
      />
      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="0"
        y="152"
        rx="2"
        ry="2"
        width="210"
        height="41"
      />

      <rect
        style={{
          fill: '' + 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="217"
        y="152"
        rx="2"
        ry="2"
        width="150"
        height="41"
      />

      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="0"
        y="200"
        rx="2"
        ry="2"
        width="667"
        height="41"
      />

      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="12"
        y="295"
        rx="2"
        ry="2"
        width="211"
        height="121"
      />

      <rect
        style={{
          fill: 'url("#rec-animated")',
          boxShadow: '0 2px 4px 1px rgba(0,0,0,.17)'
        }}
        x="240"
        y="295"
        rx="2"
        ry="2"
        width="211"
        height="211"
      />

      <linearGradient id="rec-animated">
        <stop offset="0%" stopColor="#f6f6ef" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.5; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#e8e8e3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.5; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#f6f6ef" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.5; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </svg>
    <p style={{ color: '#f1d1c7' }}>Loading...</p>
  </>
)

export { SkeleLoader }
