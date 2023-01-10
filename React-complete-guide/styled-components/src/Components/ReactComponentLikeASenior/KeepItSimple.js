import React from 'react'
import items from './Items'

function KeepItSimple(props) {
  return (
    <div>
      <ul>
        {props.items.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default KeepItSimple
