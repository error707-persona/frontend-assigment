import React from 'react'
import {IconHome,IconLayoutDashboard, IconSquareCheck,IconPhoto} from '@tabler/icons'
const NavBar = () => {
  return (
    <div>
    <div className='nav'>
        <div className="nav__item nav__item--active"><IconHome/></div>
        <div className="nav__item nav__item--active"><IconLayoutDashboard/></div>
        <div className="nav__item nav__item--active"><IconSquareCheck/></div>
        <div className="nav__item nav__item--active"><IconPhoto/></div>
    </div>
    </div>
  )
}

export default NavBar