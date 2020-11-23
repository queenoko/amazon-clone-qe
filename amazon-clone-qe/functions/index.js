const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Hf0OuAJ8Ce1xwdme7VoUl5CKI7nrCGGQ0GlWSCogbOZFI3rFjvcfLTXa52thwQClaKTX0OGlZQARbfbZZzA40df00IWHJAjyB');

// API

// App config

const app = express();

// Middlewares
app.use(cors({ origin : true }));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send ('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "usd",
    });

    // OK Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-qe/us-centra11/api
