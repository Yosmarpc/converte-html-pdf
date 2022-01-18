import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerpdf from "./routers/routerpdf.js";


const app  = express();

const PORT = process.env.PORT || 5001

app.set("PORT", PORT);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routerpdf);


app.listen(app.get("PORT"))
console.log("Listen server", app.get("PORT"));

export default app;