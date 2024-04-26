import React, { useState } from 'react'

const App = () => {
    let purple = 'purple'
    var [bg, setbg] = useState(purple)
    var [name, setName] = useState('Click h me')
    const bgChange = () => {
        // let newbg = 'yellow'
        setbg('yellow')
        setName('ouchh')
    }
    const bgBack = () => {
        setbg(purple)
        setName('dsd')
    }
    return (
        <>
        <div style={{ background: bg }}>
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        </div>
        </>
    );
}

export default App