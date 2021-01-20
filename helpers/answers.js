import axios from "axios";

const ENDPOINT = "https://4b3b168a5877.ngrok.io";

const sendAnswer = (answer) => {
  const message = { msg: answer }
  axios.post(`${ENDPOINT}/mobile/answer`, message)
  .catch(err => console.log(err));
}

export { sendAnswer };