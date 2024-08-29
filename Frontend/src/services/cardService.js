import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/help-center/cards";

export const getAllCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const createCard = async (cardData) => {
  try {
    const response = await axios.post(API_URL, cardData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getCardByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}?title=${title}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
