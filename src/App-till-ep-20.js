import React from "react";
import ReactDOM from "react-dom";

function App() {
    let currentDate = new Date();
    currentDate = currentDate.getHours()
    const root = ReactDOM.createRoot(document.getElementById('root'));
    let greeting = '';
    let cssStyle = {
          color: 'green'
    };
    if(currentDate >= 1 && currentDate < 12){
          greeting = 'morning';
          cssStyle.color = 'blue'
    }
    else if(currentDate >=12 && currentDate < 19){
          greeting = 'noon'
          cssStyle.color = 'skyblue'
    }
    else{
          greeting='night'
          cssStyle.color = 'grey'
    }
    return (
      <>
      <div>
      <h1 >Hello, GM <span style={cssStyle}>{greeting} </span></h1>
      </div>
      </>
    );  
}

export default App

// import React from 'react'
// import Heading from './Heading'
// import Paragraph from './Paragraph'
// import List from './List'

// function App() {
//   return (
//     <>
//         <Heading/>
//         <Paragraph/>
//         <List/>
//         <Paragraph/>
//     </>
//     )
// }

// export default App