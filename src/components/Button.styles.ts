import styled from 'styled-components'

import { Button } from 'reactstrap'


const NormalBtnMixin = (ft: string, bg: string, outline: boolean) => `
  color: var(${!outline ? ft : bg});
  background-color: ${!outline ? `var(${bg})` : 'transparent'};
  border-color: var(${bg}) !important;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    color: var(${!outline ? bg : '--primary-cl'});
    background-color: ${outline ? `var(${bg})` : 'transparent'};
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 .25rem rgba(var(${bg}-rgb), .68);
  }
`

export default styled(Button)`
  display: inline-block;

  margin: 4px;
  padding: 9px 40px;
  border-radius: 6px;

  font-size: var(--text-regular);
  font-weight: var(--font-weight-medium);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  border-radius: 8px;
  transition: opacity .6s, background-color .6s, color .2s;
  ${ NormalBtnMixin('--primary-cl', '--secondary-cl', false) };

  &.mini {
    padding: 5px 40px;
  }

  &.btn-outline-primary {
    ${ NormalBtnMixin('--primary-cl', '--secondary-cl', true) };
  }

  &.btn-success {
    ${ NormalBtnMixin('--primary-cl', '--green-cl', false) };
  }
  &.btn-outline-success {
    ${ NormalBtnMixin('--primary-cl', '--green-cl', true) };
  }

  &.btn-error {
    ${ NormalBtnMixin('--primary-cl', '--red-cl', false) };
  }
  &.btn-outline-error {
    ${ NormalBtnMixin('--primary-cl', '--red-cl', true) };
  }

  &.btn-warning {
    ${ NormalBtnMixin('--primary-cl', '--yellow-cl', false) };
  }
  &.btn-outline-warning {
    ${ NormalBtnMixin('--primary-cl', '--yellow-cl', true) };
  }

  &[disabled] {
    opacity: .7;

    &, & * {
      cursor: no-drop;
    }
  }
`

