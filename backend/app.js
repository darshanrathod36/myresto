import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware} from "./error/error.js";
import reservatioRouter from "./routes/reservationRoute.js"

const app = express();
dotenv.config({path: "./config/config.env"});

// Enable CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,

        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/api/v1/reservation", reservatioRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })})

dbConnection();

app.use(errorMiddleware);

export default app;