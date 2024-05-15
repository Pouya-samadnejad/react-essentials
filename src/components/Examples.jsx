import TabButton from "../components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../date.js";
import Tab from "./Tab.jsx";
import Section from "./Section.jsx";
export default function Examples() {
  const [selectedItem, setSelectedItem] = useState();
  function handleSelect(selectedButton) {
    setSelectedItem(selectedButton);
    console.log(selectedButton);
  }
  return (
    <Section title="Example" id="examples">
      <Tab
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={selectedItem === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedItem === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedItem === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedItem === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {" "}
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
      </Tab>
    </Section>
  );
}
