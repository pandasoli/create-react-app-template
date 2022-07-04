import { Error as ErrorRoute, Sucess as SucessRoute } from '../utils/routes'

import Button from '../components/Button'


const Error = () => {

  const err = async () =>
    console.log( await ErrorRoute() )

  const scs = async () =>
    console.log( await SucessRoute() )

  return <>
    <Button onClick={ err } color='primary'>Click to run /error</Button>
    <Button onClick={ scs } color='primary'>Click to run /sucess</Button>
  </>
}


export default Error