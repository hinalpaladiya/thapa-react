import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {

    const [inputList, setInputList] = useState('')
    const [items, setItems] = useState([])
    const deleteItem = (id) =>{
        console.log(id, 'id');
        setItems((olditems) => {
            return olditems.filter((arrElement, index) => {
                return index !== id;
            })
        })
        console.log('cd');
    }
    const ItemEvent = (e) => {
        setInputList(e.target.value)
    }
    const ListOfItem = (e) => {
        setItems((olditems)=>{
            return [...olditems, inputList]
        })
        setInputList('')
        // return
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br></br>
                    <h1>To-Do List</h1>
                    <br></br>
                    <input type="text" placeholder="Enter a item" onChange={ItemEvent} value={inputList}/>
                    <button onClick={ListOfItem}>+</button>
                    <br />
                        <ol>
                        {items.map((itemVal, index) => {
                           return <ToDoList key={index} id={index} text={itemVal} 
                           onSelect={deleteItem} />
                        })}
                            {/* <li>bjhj</li>
                            <li>{inputList}</li>
                            <li></li> */}
                        </ol>
                </div>
            </div>
        </>        
    )
}
export default App