import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  let index = 0;
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
