import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
     <Typewriter
        options={{
          strings: ["Experience the new way to work"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  )
}

export default Type