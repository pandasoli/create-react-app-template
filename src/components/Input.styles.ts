import styled from 'styled-components'

import { Input } from 'reactstrap'


export default styled(Input)`
  transition: background-color .6s, color .6s, border-color .6s, box-shadow .2s;

  &[type='text'],
  &[type='password'],
  &[type='number'] {
    --cl: var(--secondary-cl);
    --cl-rgb: var(--secondary-cl-rgb);

    color: var(--cl) !important;
    border-color: var(--cl) !important;

    ::selection {
      color: var(--primary-cl);
      background-color: var(--cl);
    }

    &.success { --cl: var(--green-cl); --cl-rgb: var(--green-cl-rgb); }
    &.warning { --cl: var(--yellow-cl); --cl-rgb: var(--yellow-cl-rgb); }
    &.error { --cl: var(--red-cl); --cl-rgb: var(--red-cl-rgb); }

    &:focus {
      box-shadow: 0 0 0 .25rem rgb(var(--cl-rgb), .68);
    }
  }

  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
      margin: 0 !important;
    }
  }

  &[type='checkbox'] {
    border-color: var(--primary-cl-light);
    background-color: var(--primary-cl-light);

    &:checked {
      background-color: var(--secondary-cl);
    }

    &:focus {
      box-shadow: 0 0 0 .25rem rgb(var(--secondary-cl-rgb), .68);
    }
  }
`
