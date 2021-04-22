import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const reset = () => {
    setPeople(data);
  };

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3> No more birthdays! 🎉🎂</h3>
          <button onClick={reset}> reset</button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h3>
          {people.length}
          {people.length > 1 ? " Birthdays Today" : " Birthday Today"} 🎉🎂
        </h3>
        <List people={people} removeItem={removeItem} />
        <button onClick={() => setPeople([])}>
          {people.length > 1 ? " Clear Birthdays" : "Clear Birthday"}
        </button>
      </section>
    </main>
  );
}

export default App;
