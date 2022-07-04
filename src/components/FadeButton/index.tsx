import { ReactNode, useState } from 'react'

import Button from '../Button'
import Container, { Header, Main } from './index.styles'

type Props = {
  text: string
  children: ReactNode
}


const FadeButton = (props: Props) => {
  const [ Open, SetOpen ] = useState(false)

  return <Container>
    <Header>
      <Button color='primary' outline onClick={ () => SetOpen(!Open) }>{ props.text }</Button>
    </Header>
    <Main>
      { Open && props.children }
    </Main>
  </Container>
}


export default FadeButton