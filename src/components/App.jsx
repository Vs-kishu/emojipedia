import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>EMOJIPEDIA</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((section) => (
          <Entry
            key={section.id}
            emoji={section.emoji}
            name={section.name}
            meaning={section.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
