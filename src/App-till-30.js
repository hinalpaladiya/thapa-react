import React from 'react'
import Netflix from './Netflix'
import Amazon from './Amazon'
const favSeries = 'amazon'

// const FavS = () => {
//     if(favSeries === 'netflix'){
//         return (
//             <Netflix/>
//         )
//     }
//     else{
//         return (
//             <Amazon />
//         )
//     }
// }
const App = () => {
    return (
        <>
        <h1 className="heading_style">List of netflix series</h1>
        { (favSeries == 'netflix') ? <Netflix/> : <Amazon/>}
        {/* <FavS /> */}
        </>
    )
}











// const App = () => {
//     <>
//     <h1 className="heading_style">List of netflix series</h1>
//     {sData.map((value) => {
//         return (
//             <Card 
//                 key = {sData[1].id}
//                 imgSrc={sData[1].imgSrc} 
//                 title={sData[1].title} 
//                 sname={sData[1].sname} 
//                 link={sData[1].link} 
//             />
//         )
//     })}
//     </>
// }


// if(favSeries == 'netflix'){
// return (
//     <>
//     <h1 className="heading_style">List of netflix series</h1>

//     <Card 
//         key = {sData[1].id}
//         imgSrc={sData[1].imgSrc} 
//         title={sData[1].title} 
//         sname={sData[1].sname} 
//         link={sData[1].link} 
//     />
//     </>
// )
// }else{

// }

export default App