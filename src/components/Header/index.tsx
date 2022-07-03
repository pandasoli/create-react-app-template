import { useState } from 'react'

import { NavItem } from './index.styles'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink } from 'reactstrap'


const Header = () => {
  const [ Open, SetOpen ] = useState(false)

  const buttons = [
    { link: '/', text: 'Home' },
    { link: '/test', text: 'Test' },
    { link: '/error', text: 'Error' }
  ]

  return (
    <Navbar color='faded' light expand='md' dark>
      <NavbarBrand href='/'>
        <h1>Panda' create-react-app-template</h1>
      </NavbarBrand>

      <NavbarToggler onClick={ () => SetOpen(!Open) }/>

      <Collapse navbar isOpen={ Open }>
        <Nav navbar className='ms-auto align-items-center'>
          {
            buttons.map(($, _) =>
              <NavItem key={ _ } className={ document.location.pathname === $.link ? 'selected' : '' }>
                <NavLink href={ $.link }>{ $.text }</NavLink>
              </NavItem>
            )
          }
        </Nav>
      </Collapse>
    </Navbar>
  )
}


export default Header