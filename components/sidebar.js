import React from 'react'
import 
{BsHouseDoorFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsWallet2, BsMenuButtonWideFill, BsFillGearFill, BsReverseLayoutSidebarInsetReverse}
 from 'react-icons/bs';
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < BsReverseLayoutSidebarInsetReverse  className='icon_header'/>
                 DashBoard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsHouseDoorFill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsWallet2 className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar