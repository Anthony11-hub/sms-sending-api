import express, { Request, Response, NextFunction } from "express";
import smsRoutes from "./routes/smsRoutes";

const app = express();
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.use("/sms", smsRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App running started on port:${PORT}`);
});
