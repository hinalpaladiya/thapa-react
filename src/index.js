import React from "react";
import ReactDOM from "react-dom/client";
import Card from './Cards';
import sData from "./sdata";
import App from './App'
import ToDoList from "./ToDoList";
import { BrowserRouter } from "react-router-dom";
// function ncard(value)
// {
//     console.log(value, 'value');
//     return (
//         <Card 
//             imgSrc={value.imgSrc} 
//             title={value.title} 
//             sname={value.sname} 
//             link={value.link} 
//         />
//     )   
// }
// const fullname = ['h', 'p'];
// const bio2 = [1, ...fullname, 26, 'male'];
// const fn = [...fullname, ...bio2];
// console.log(fn, 'fn');
// console.log(fullname);
// console.log(bio2);

// const name = {
//     fname: 'hmp',
//     lname: 'fd'
// }

// const bio = {
//     id: 3,
//     ...name,
//     gender: 'male'
// }
// console.log(name, bio);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    {/* <h1 className="heading_style">List of netflix series</h1> */}
    {/* <ToDoList/> */}
        {/* {sData.map((value) => {
            return (
                // <Card 
                //     key = {value.id}
                //     imgSrc={value.imgSrc} 
                //     title={value.title} 
                //     sname={value.sname} 
                //     link={value.link} 
                // />
            );  
        })} */}

        {/* <Card imgSrc={sData[0].imgSrc} title={sData[0].title} 
        sname={sData[0].sname} link={sData[0].link} /> */}
        {/* <Card imgSrc={sData[0].imgSrc} title={sData[0].imgSrc} 
        sname={sData[0].imgSrc} link={sData[0].imgSrc} />
        <Card imgSrc={sData[0].imgSrc} title={sData[0].imgSrc} 
        sname={sData[0].imgSrc} link={sData[0].imgSrc} /> */}

        {/* <Card imgSrc="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=800" title="netflix original series1" 
        sname="The Umbrella Academy
        " link="https://www.netflix.com/in/title/80186863" />
        <Card imgSrc="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800" title=" netflix original series2" 
        sname="Kaala Paani" link="https://www.netflix.com/in/title/81314368" />
        <Card imgSrc="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800" title="netflix original series" 
        sname="Lucifer" link="https://www.netflix.com/in/title/80057918" /> */}
    </>
);