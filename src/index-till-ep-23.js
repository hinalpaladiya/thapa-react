import React from "react";
import ReactDOM from "react-dom";
// import youtubeChannel, {favPrgm, myName} from "./App";
import * as ques from './App'
import { sum, sub, mul, div } from "./Math";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    {/* <ol>
        <li>Thapa</li>
        <li>{ques.default}</li>
        <li>{ques.favPrgm}</li>
        <li>{ques.myName()}</li>
    </ol> */}

     <ul>
        <li>Sum = {sum(2, 3)}</li>
        <li>sub = {sub(3,2)}</li>
        <li>div = {div(10, 2)}</li>
        <li>mul = {mul(9,3)}</li>
    </ul>
</>
);