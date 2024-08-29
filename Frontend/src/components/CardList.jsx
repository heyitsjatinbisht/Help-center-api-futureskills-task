import React from "react";

const CardList = ({ cards }) => {
  return (
    <div className="flex justify-center m-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-4 border rounded-md shadow-sm bg-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <hr className="w-full" />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
