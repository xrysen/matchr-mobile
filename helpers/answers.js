import axios from "axios";

const ENDPOINT = "https://85340d64288b.ngrok.io";

const sendAnswer = (answer) => {
  const message = { msg: answer }
  axios.post(`${ENDPOINT}/mobile/answer`, message)
  .catch(err => console.log(err));
}

export { sendAnswer };