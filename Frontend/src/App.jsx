// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAllCards } from "./services/cardService";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import CreateCardForm from "./components/CreateCardForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsData = await getAllCards();
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6 text-center">
                  How can we help?
                </h1>
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={(e) => setSearchTerm(e.target.value)}
                />
                <CardList cards={filteredCards} />
              </div>
            }
          />
          <Route path="/submit-request" element={<CreateCardForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
