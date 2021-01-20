import axios from "axios";

const ENDPOINT = "https://022f56427f39.ngrok.io";

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

export { sendAnswer };