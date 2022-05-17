// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
import PropTypes from 'prop-types'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

/*
const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
*/

//Extra Credit 1
/*
const Box = ({className = '', style, boxText, ...otherProps}) => {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
      {boxText}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object.isRequired,
  boxText: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
}

function App() {
  return (
    <div>
      <Box
        className="box--small"
        style={{backgroundColor: 'lightblue'}}
        boxText="small lightblue box"
      />
      <Box
        className="box--medium"
        style={{backgroundColor: 'pink'}}
        boxText="medium pink box"
      />
      <Box
        className="box--large"
        style={{backgroundColor: 'orange'}}
        boxText="large orange box"
      />
    </div>
  )
}
*/

//Extra Credit 2
const Box = ({className = '', style, boxText, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
      {boxText}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object.isRequired,
  boxText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  otherProps: PropTypes.object,
}

function App() {
  return (
    <div>
      <Box
        size="small"
        style={{backgroundColor: 'lightblue'}}
        boxText="small lightblue box"
      />
      <Box
        size="medium"
        style={{backgroundColor: 'pink'}}
        boxText="medium pink box"
      />
      <Box
        size="large"
        style={{backgroundColor: 'orange'}}
        boxText="large orange box"
      />
    </div>
  )
}

//Extra Credit 3

export default App
