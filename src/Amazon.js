import React from 'react'
import Card from './Cards'
import sData from './sdata'

function Amazon() {
  return (
    <>
        <Card 
            key = {sData[2].id}
            imgSrc={sData[2].imgSrc} 
            title={sData[2].title} 
            sname={sData[2].sname} 
            link={sData[2].link} 
        />
    </>
  )
}

export default Amazon