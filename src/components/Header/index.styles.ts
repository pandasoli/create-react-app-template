import styled from 'styled-components'
import { NavItem as NavItemC } from 'reactstrap'


export const Title = styled.h1`
  margin: 0;
`

export const NavItem = styled(NavItemC)`
  position: relative;

  overflow: hidden;

  a {
    color: var(--secondary-cl-light) !important;

    transition: opacity .2s;

    &:hover {
      opacity: .8;
    }
  }

  &.selected a {
    color: var(--secondary-cl) !important;
  }
`
