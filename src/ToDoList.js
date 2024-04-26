import React, { useState } from "react";
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom'
const ToDoList = () => {
    const [item, setItem] = useState('');
    const [newItem, setNewItem] = useState([])
    const listOfItem = () => {
        setNewItem((prevItem) => {
            return [...prevItem, item]
        })
        setItem('')
    }
    const itemEvent = (e) => {
        setItem(e.target.value);
    }
    return (<>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDoList</h1>
            <br />
            <input type="text" placeholder="Add an item" value={item} onChange={itemEvent} />
            <Button onClick={listOfItem}>
                +
            </Button>
            <br />
            <ol>
                {newItem.map((val, index) => {
                    return (<ListCom key={index} text={val} />)
                })}
            </ol>
        </div>
    </div>
    </>)
}
export default ToDoList