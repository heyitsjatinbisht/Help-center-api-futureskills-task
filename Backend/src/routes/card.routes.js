import { Router } from "express";

import {
  createCard,
  getAllcards,
  getCardByTitle,
} from "../controllers/card.controller.js";

const router = Router();

router.route("/cards").post(createCard);

router.route("/cards").get(getAllcards);
router.route("/cards/:title").get(getCardByTitle);

export default router;
