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

app.get("/api/v1/website/status", authMiddleware, async (req, res) => {
  const websiteId = req.query.websiteId! as string;
  const userId = req.userId;

  const data = await prismaClient.website.findFirst({
    where: {
      id: websiteId,
      userId,
      disabled: false,
    },
    include: {
      ticks: true,
    }
  })

  res.json(data);

})

app.get("/api/v1/websites", authMiddleware, async (req, res) => {
  const userId = req.userId;

  const websites = await prismaClient.website.findMany({
    where: {
      userId,
      disabled: false,
    }
  })

  res.json(websites);
})

app.delete("/api/v1/website", authMiddleware, async (req, res) => {
  const websiteId = req.query.websiteId! as string;
  const userId = req.userId;

  await prismaClient.website.update({
    where: {
      id: websiteId,
      userId
    },
    data: { disabled: true },
  })

  res.json({
    message: "Website deleted",
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});