import { AxiosResponse } from 'axios'
import Api from './api'


const Request = async (route: string) => {
  let res: AxiosResponse = {} as AxiosResponse

  await Api.post(route)
    .then(_res => res = _res.data)
    .catch(_res => res = _res.response.data)

  return res
}

const Error = () => Request('error')
const Sucess = () => Request('sucess')


export { Error, Sucess }