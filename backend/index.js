import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// this will allow express to use JSON body now
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send(`Welcome to Bookbuster!`);
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database`);

    // only want express server to run if data connection is successful
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
