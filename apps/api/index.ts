import express from "express";
import { authMiddleware } from "./middleware.js";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());

app.post("/api/v1/website", authMiddleware, async (req, res) => {
  const userId = req.userId!;
  const url = req.body.url;

  const data = await prismaClient.website.create({
    data: {
      userId,
      url: url,
    }
  });

  res.json({
    id: data.id,
  });

});

app.get("/api/v1/website/status", authMiddleware, (req, res) => {
})

app.get("/api/v1/websites", authMiddleware, (req, res) => {
})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});