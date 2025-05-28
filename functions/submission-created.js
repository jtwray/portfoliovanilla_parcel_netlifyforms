import dotenv from 'dotenv';
// require("dotenv").config();
// const fetch = require("node-fetch");

const { REACHOUT_TOKEN } = process.env;

exports.handler = async event => {
  const reachout = JSON.parse(event.body).payload.reachout;
  console.log(`Received a submission: ${reachout}`);

  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${REACHOUT_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reachout })
  })
    .then(response => response.json())

    .then(data => {
      console.log(`Submitted to Buttondown: \n ${data}`);
    })

    .catch(error => ({ statusCode: 422, body: String(error) }));
};

// dotenv.config();

// const { REACHOUT_TOKEN } = process.env;

// export const handler = async event => {
//   try {
//     const payload = JSON.parse(event.body).payload;
//     console.log(`Received a submission:`, payload);
    
//     const response = await fetch("https://api.buttondown.email/v1/subscribers", {
//       method: "POST",
//       headers: {
//         Authorization: `Token ${REACHOUT_TOKEN}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ email: payload.email })
//     });
    
//     const data = await response.json();
//     console.log(`Submitted to Buttondown:`, data);
    
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Subscription successful" })
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return { 
//       statusCode: 422, 
//       body: JSON.stringify({ message: error.message }) 
//     };
//   }
// };