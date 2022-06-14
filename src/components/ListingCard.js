import React, { useState } from "react";

function ListingCard({
  listing: { id, image, description, location },
  onDelete,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
