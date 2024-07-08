import { useCountUp } from 'react-countup';

import React from 'react'

const counter = ({end,delay}) => {
    const countUpRef = React.useRef(null);
    const { } = useCountUp({
      ref: countUpRef,
      start: 0,
      end: end,
      delay: delay,
      duration: 5,
     
    });
  return (
    <div>
      <div style={{color:"white"}} ref={countUpRef} />
     
    </div>
  )
}

export default count
