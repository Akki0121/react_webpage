import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div><h1>Hello ANKIT</h1></div>
        <div className='header-left'>
           
        </div>
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
             <input className='searchbar' type='searchbar' placeholder='Search'></input>
            {/* <button type='search'><BsSearch  className='icon'/></button> */}
        </div>
    </header>
  )
}

export default Header