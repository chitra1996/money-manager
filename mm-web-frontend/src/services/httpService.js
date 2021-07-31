import axios from "axios";

const baseUrl = "http://0.0.0.0:8080/";

class ApiCall {
    /**
     * @param {*} payload = {
     *   method: 'post/get/put/delete',
     *   url: 'string',
     *   data?: {}
     * @returns response from API call
     */
  sendRequest = async (payload) => {
    payload.url = baseUrl + payload.url;
    let result =  await axios(payload);
    return result
  };
}

export default ApiCall;
