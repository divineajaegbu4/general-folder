const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LwpTJLuvzKpIQ3yOLa7460WM2qj6XnQMX8alQTBUNba5RxLhPnjmTkEhnoiJeHvcBkN6rqZJED98bTBAiShyRiI00QYQyYxZR"
);

//api

// // App config
// const app = express();

// //Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// //api routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved", total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "inr",
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// app.listen(process.env.PORT || 4000, () => {
// 	console.log("Sever is listening on port 4000")
// })
// //listen command
// exports.api = functions.https.onRequest(app);
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
