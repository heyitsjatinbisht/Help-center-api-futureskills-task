import { Card } from "../models/card.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createCard = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  const newCard = await Card.create({
    title,
    description,
  });

  const cardUpload = await Card.findById(newCard._id);

  if (!cardUpload) {
    throw new ApiError(500, "Card creation is failed please try again.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cardUpload, "card created successfully"));
});

const getAllcards = asyncHandler(async (req, res) => {
  const cards = await Card.find();

  if (!cards) {
    throw new ApiError(404, "No card found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cards, "Cards fetched successfully"));
});

const getCardByTitle = asyncHandler(async (req, res) => {
  const card = await Card.findOne({ title: req.params.title });

  if (!card) {
    throw new ApiError(404, "Card not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, card, "card fetched successfully"));
});

export { createCard, getAllcards, getCardByTitle };
