import axios from "axios"
import {BASE_URL,token_key} from "../const"
import {getLocalStorage} from "../tokenstorage"

let headers={ 'Content-Type': 'application/json'}



  let AxiosInstance =axios.create({
 base_URL:BASE_URL,
headers
})

export default AxiosInstance
