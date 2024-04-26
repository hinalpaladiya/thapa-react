import React from 'react'
import Card from './Cards'
import sData from './sdata'

function Netflix() {
  return (
    <>
    <Card 
        key = {sData[1].id}
        imgSrc={sData[1].imgSrc} 
        title={sData[1].title} 
        sname={sData[1].sname} 
        link={sData[1].link} 
    />
    </>
  )
}

export default Netflix