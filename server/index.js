const express = require("express");
const cors = require("cors");
const app = express();
const DataBase = require("./config/DataBase");
const ProjectRoutes = require("./routes/project");
const MailRoute = require("./routes/sendmail");
const dotenv = require("dotenv");
dotenv.config();

DataBase.connect();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: "https://mypersonalportfolio24.netlify.app",
    origin: `${process.env.NEXTJS_URL}`,
    // origin: "http://localhost:5173",

    credentials: true,
  })
);

app.use("/api/v1", ProjectRoutes);
app.use("/api/v1", MailRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}/n `));
