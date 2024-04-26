import React, { useState } from 'react'


function App() {
    var state = useState();
    // console.log(state, 'st');
    // var count = 0;
    var [count, setCount] = useState(30)
    // var nm = ['de', 'fd'];
    // var [nm1, nm2, nm3] = nm;
    // console.log(nm1);
    var IncNum = () => {
        setCount(count + 5)
    count++;
    // console.log('fe');

    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    </>
  )
}

export default App