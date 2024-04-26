import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
const ListCom = (props) => {
    const [line, setLine] = useState(false)
    const cutIt = () => {
        setLine(true)
    }
    return (
        <>
        <li style={{textDecoration: line ? 'line-through' : 'none' }}>{props.text}</li>
        <span onClick={cutIt}><RemoveIcon /></span>
        </>
    )
}
export default ListCom