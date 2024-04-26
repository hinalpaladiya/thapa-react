import React, { useState } from 'react'

function App() {
  var time = new Date().toLocaleTimeString();
 
var [time, setTime] = useState(time);

const updateTime = () => {
  var Ctime = new Date().toLocaleTimeString();
  setTime(Ctime)
}
  return (
    <>
    <h1>Get time: {time}</h1>
    <button onClick={updateTime}>Click to get time</button>
    </>
  )
}

export default App