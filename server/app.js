import express from "express";
import userRoute from "./routes/userRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
