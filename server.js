const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const config = require("./config");

const ruleRoutes = require("./routes/rules");
const weatherRoutes = require("./routes/weather");
const alertRoutes = require("./routes/alerts");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/rules", ruleRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/alerts", alertRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
