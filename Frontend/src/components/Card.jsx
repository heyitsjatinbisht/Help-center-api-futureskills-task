import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
