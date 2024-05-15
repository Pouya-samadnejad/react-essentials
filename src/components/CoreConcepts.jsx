import { CORE_CONCEPTS } from "../date.js";
import CoreConcept from "./CoreConcept/CoreConsept.jsx";
import Section from "./Section.jsx";
export default function CoreConcepts() {
  return (
    <>
      <Section title="Time to get started!" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </Section>
    </>
  );
}
