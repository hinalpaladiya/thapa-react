// import React from "react";
// import showTime from "./node_modules/digital-clock/index.js";

// const ToDoList = () =>{
//     return(
//         <>
//             <div class="digital-clock">
// {setInterval(showTime, 1000)}
                
//             </div> 
//         </>
//     )

// }
// export default ToDoList

import React, { useState, useEffect } from "react";
// import DigitalClock from "./node_modules/digital-clock/index.js";

const ToDoList = () => {
  // Assuming you want to store time as state
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="digital-clock">
        {/* Render the DigitalClock component */}
        {/* <D/igitalClock time={currentTime} /> */}
      </div>
    </>
  );
};

export default ToDoList;
