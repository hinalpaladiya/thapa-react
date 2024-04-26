import React from "react";

const ToDoList = (props) => {
    
    return ( 
    <>
    <div className="todo">
        <span onClick={() => {
            props.onSelect(props.id)
        }}>*</span>
        <li>{props.text}</li>
    </div>
    </>
    )
}
export default ToDoList