import Header from "./components/Header/Header.jsx";
import CoreConcepts from "../src/components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
