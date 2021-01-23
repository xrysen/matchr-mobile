import axios from "axios";
import { ENDPOINT } from "./constants";
import socketIO from "socket.io-client";

const socket = socketIO(ENDPOINT, {
  transports: ["websocket"],
  jsonp: false,
});

// const sendAnswer = (answer) => {
//   let reply = "test";
//   const message = { msg: answer }
//   axios.post(`${ENDPOINT}/mobile/answer`, message)
//   .then((res) => res.request._response)
//   .then((res) => res)
//   .catch(err => console.log(err));
// }

async function sendAnswer(answer) {
  const message = { msg: answer }
  const res = await axios.post(`${ENDPOINT}/mobile/answer`, message)
  const result = res.request._response;
  return result;

}

const sendWsAnswer = (answer) => {
  socket.emit("answer", answer);
}

export { sendAnswer, sendWsAnswer };