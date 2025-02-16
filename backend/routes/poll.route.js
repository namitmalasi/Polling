import express from "express";
import {
  createPoll,
  getPoll,
  votePoll,
  getPollResults,
} from "../controllers/poll.controller";

const router = express.Router();

router.post("/polls", createPoll);
router.get("/polls/:id", getPoll);
router.post("/polls/:id/vote", votePoll);
router.get("/polls/:id/results", getPollResults);
