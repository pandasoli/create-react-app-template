import styled from 'styled-components'


const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Contents = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 20px 20px 0px 20px;
  overflow: auto;

  .components {
    flex-grow: 1;
  }
`


export {
  Container,
  Contents
}