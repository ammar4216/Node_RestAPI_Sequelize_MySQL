const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

// global middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/productRoutes");
app.use("/api/products", router);

// api
app.get("/", (req, res) => {
  res.json({
    message: "Node First App",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
