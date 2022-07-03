import IconLabel from '../IconLabel'
import Container, { Divider, Title } from './index.styles'


const Footer = () =>
  <Container>
    <Divider>
      <Title>Project repo</Title>

      <a href='https://github.com/pandasoli/create-react-app'>GitHub</a>
    </Divider>

    <Divider>
      <Title>Credits</Title>

      <IconLabel iconUrl='svgs' icon='github' text='pandasoli' link='https://github.com/pandasoli'/>
      <IconLabel iconUrl='svgs' icon='instagram' text='pandasoli.ofc' link='https://instagram.com/pandasoli.ofc'/>
      <IconLabel iconUrl='svgs' icon='facebook' text='pandasoli.ofc' link='https://facebook.com/pandasoli.ofc'/>
    </Divider>
  </Container>


export default Footer