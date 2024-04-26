import React from 'react'
import SlotM from './SlotMatch'

function App() {
  return (
        <>
        <h1 className="heading_style">Slot Machine Game 🎰 </h1>
        <div className='slotmachine'>
          <SlotM x='😄' y='🎅' z='🐦' />
          <SlotM x='😄' y='😄' z='😄' />
          <SlotM x='😄' y='🎅' z='🐦' />
          <SlotM x='🐦' y='🐦' z='🐦' />
        </div>
        </>
    )
}

export default App