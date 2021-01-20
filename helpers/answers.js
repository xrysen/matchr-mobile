import axios from "axios";

const ENDPOINT = "https://c35609e1ab7d.ngrok.io";

const sendAnswer = (answer) => {
  const message = { msg: answer }
  axios.post(`${ENDPOINT}/mobile/answer`, message)
  .catch(err => console.log(err));
}

export { sendAnswer };