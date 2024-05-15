import TabButton from "../components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../date.js";
export default function Examples() {
  const [selectedItem, setSelectedItem] = useState();
  function handleSelect(selectedButton) {
    setSelectedItem(selectedButton);
    console.log(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedItem === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedItem === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={selectedItem === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedItem === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedItem ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedItem].title}</h3>
          <p>{EXAMPLES[selectedItem].description}</p>
          <pre>
            <code>{EXAMPLES[selectedItem].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
