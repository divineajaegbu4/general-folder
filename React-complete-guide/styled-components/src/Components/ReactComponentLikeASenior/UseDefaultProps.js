import React from 'react'
import PropTypes from "prop-types"

function UseDefaultProps(props) {
  return (
    <div>
      Hello, {props.name}
      <br/>
      Hello, {props.greeting}
      <br/>
      Education is the {props.id}
      <br/>
      View props, {props.show}
    </div>
  )
}

UseDefaultProps.defaultProps ={
    name: 68,
    greeting: "I am greeting",
    id: "key",
}

UseDefaultProps.propTypes = {
    name: PropTypes.string.isRequired
}

export default UseDefaultProps
