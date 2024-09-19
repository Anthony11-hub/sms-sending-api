import { Router, Request, Response, NextFunction } from "express";

import africastalking from "africastalking";

const router = Router();

const credentials = {
  apiKey: "", // generate api key from dashboard under settings
  username: "sandbox", // default username is sandbox for testing in sandbox environment
};

const AT = africastalking({
  apiKey: credentials.apiKey,
  username: credentials.username,
}).SMS;

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { to, message } = req.body;
    await AT.send({
      to,
      from: "", // get short code or alphaneumeric from AT dashboard
      message,
    });
    res.status(200).json({ message: "SMS sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
});

export default router;
