import express from "express";

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users');

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})