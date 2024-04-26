import React, { useState } from "react";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const ToDoList = () => {
    var [num, setNum] = useState(5);
    const IncNum = () => {
        setNum(num++)
    }
    const DecNum = () => {
        (num > 0) ? setNum(num--) : setNum(0);
       
    }
    return(
        <>
            <div className="main_div">
                <h1>{num}</h1>
                <div>
                    <Tooltip title="Add">
                        <Button onClick={IncNum}><AccessAlarm /></Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button onClick={DecNum}><ThreeDRotation /></Button>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
export default ToDoList