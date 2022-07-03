import Container, { Icon } from './index.styles'

type Props = {
  icon: string
  text: string
  link?: string
  iconUrl?: string
}


const IconLabel = (props: Props) =>
  <Container>
    <Icon
      src={ `/${props.iconUrl || 'twemojis'}/${props.icon}.svg` }
      alt={  `${props.icon} icon not found at /${props.iconUrl}/` }
    />

    <a href={ props.link }>{ props.text }</a>
  </Container>


export default IconLabel