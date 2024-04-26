import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import Service from './Service'

const Name = () => {
    return (
       <h1>Hello, Name</h1>
    )
}
function App() {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<About name="about name" />} />
            <Route path='/contact' element={<Contact name="Contact name" />} />
            <Route path='/service' element={<Service name="Service name" />} />

            <Route path='/contact/name' element={<Name/>} />
            <Route path='/*' element={<Error/>} />
        </Routes>
        <Menu />

    </>
        // <Router>
        //     <div>
        //     <Route exact path="/contact" component={Contact} />
        //     <Route exact path="/about" component={About} />
        //         {/* <Route exact element={<About/>}>About /> */}
        //         {/* <Route element={<Contact/>}>Contact</Route> */}
        //     </div>
        // </Router>
        // <Routes>
        // <Route exact path='/' element={<About/>} />
        // <Route path='/contact' element={<Contact/>} />
        // <Route path='/contact/name' element={<Name/>} />
        // <Route path='/*' element={<Error/>} />
        // </Routes>

    )
}

export default App