var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { authMiddleware } from "./middleware.js";
import { prismaClient } from "db/client";
import cors from "cors";
//import { Transaction, SystemProgram, Connection } from "@solana/web3.js";
//const connection = new Connection("https://api.mainnet-beta.solana.com");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/v1/website", authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const { url } = req.body;
    const data = yield prismaClient.website.create({
        data: {
            userId,
            url
        }
    });
    res.json({
        id: data.id
    });
}));
app.get("/api/v1/website/status", authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const websiteId = req.query.websiteId;
    const userId = req.userId;
    const data = yield prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    });
    res.json(data);
}));
app.get("/api/v1/websites", authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const websites = yield prismaClient.website.findMany({
        where: {
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    });
    res.json({
        websites
    });
}));
app.delete("/api/v1/website/", authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const websiteId = req.body.websiteId;
    const userId = req.userId;
    yield prismaClient.website.update({
        where: {
            id: websiteId,
            userId
        },
        data: {
            disabled: true
        }
    });
    res.json({
        message: "Deleted website successfully"
    });
}));
app.post("/api/v1/payout/:validatorId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.listen(8080);
