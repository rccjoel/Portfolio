'use client'

import { TypeAnimation } from "react-type-animation"

export default function Animation() {
  return(
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Together we can build something awesome',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Together we can bring ideas to life',
        1000,
        'Together we can redefine possibilities',
        1000,
        'Together we can.',
        4000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  ) 
}