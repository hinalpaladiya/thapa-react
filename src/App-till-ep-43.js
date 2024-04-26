import React, { useState } from "react";
var App = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        pnum: ''
    });
    // const [fname, setFName] = useState('')
    // const [lname, setLname] = useState('')
    // const [firstname, setFirstName] = useState('')

    const inputEvent = (event) => {
        const {value, name} = event.target;
        // console.log('event', event.target.value, event.target.name);
        // const value = event.target.value;
        // const name = event.target.name;
        setFullName((prev)=>{
            return {
                ...prev,
                [name]: value
            }
            // if(name == 'fName'){
            //     return{
            //         fname: value,
            //         lname: prev.lname,
            //         email: prev.email,
            //         pnum: prev.pnum
            //     }
            // }
            // else if(name == 'lName'){
            //     return{
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email,
            //         pnum: prev.pnum
            //     }
            // }
            // else if(name == 'email'){
            //     return{
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value,
            //         pnum: prev.pnum
            //     }
            // }
            // else if(name == 'pnum'){
            //     return{
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: prev.email,
            //         pnum: value
            //     }
            // }
            // console.log(prev);

        })
        // setName(event.target.value)
    }
    // const inputEventTwo = (event) => {
    //     setLname(event.target.value)
    // }
    const submitForm = (event) => {
        event.preventDefault();
        // console.log('event', event);
        // setFName(name)
        // setFirstName(lname)
    }
    return (
        <>
        <form onSubmit={submitForm}>
            <div>
                <h1>Hello, {fullName.fname} {fullName.lname}</h1>
                <h3>{fullName.email}</h3>
                <h5>{fullName.pnum} </h5>

                <input type="text" name="fname" placeholder="Enter your name" onChange={inputEvent} value={fullName.fname} />
                {/* value={fullName.fname} */}
                <input type="text" name="lname" placeholder="Enter your last name" onChange={inputEvent} value={fullName.lname}  />
                {/* value={fullName.lname}  */}
                {/* onChange={inputEvent}  */}
                <input type="email" name="email" placeholder="Enter your last name" onChange={inputEvent} value={fullName.email}  />
                <input type="number" name="pnum" placeholder="Enter your last name" onChange={inputEvent} value={fullName.pnum}  />
                <button type="submit" value="click me">Click Me</button>
            </div>
        </form>
        </>
    )
}
export default App;