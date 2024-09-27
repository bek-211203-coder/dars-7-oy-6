import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import bx from './assets/bx--cart.svg'
import moon from './assets/solar--moon-bold.svg'


function App() {

    return (
        <div >
            <div className='container hero-div'>
                <div className='boxBox'>
                    <span>C</span>
                </div>
                <header className='header' >
                    <button className="btn">
                        <NavLink className="a-link" to='/'>Home</NavLink>
                    </button>
                    <button className="btn">
                        <NavLink className="a-link" to='/about'>About</NavLink>
                    </button>
                </header>
                <div className='hero-icons'>
                    <img src={moon}  width={28} height={28} alt="" />
                    <img src={bx} width={28} height={28} alt="" />
                </div>
            </div>
            <Routes>
                <Route index element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
            </Routes>


            <div>

            </div>
        </div>
    )
}

export default App