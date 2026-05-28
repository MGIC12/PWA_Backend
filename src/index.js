import express from "express";
import componenteRoutes from "./routes/componente.routes.js";

const app = express();

app.use(express.json());

app.use("/api", componenteRoutes);

app.listen(3000);
console.log("Server running on port 3000");
