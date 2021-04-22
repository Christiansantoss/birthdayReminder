import React from "react";

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button
              style={{ display: people.length > 1 ? "block" : "none" }}
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
