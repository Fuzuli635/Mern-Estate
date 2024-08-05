import express from "express";
const api = express();
api.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});
