import React from 'react'
import styled, {keyframes} from 'styled-components'



export default function Details({ character, action}) {
    return (
      <div>
        {/* <button onClick={() => action(character.id)}> See Details</button> */}
        {character.name}
        <button onClick={() => action(character.name)}>
          See details right here: 
        </button>
      </div>
    )
  }
  