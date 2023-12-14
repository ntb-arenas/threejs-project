import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/home";

function App() {
  return (
    <main className="transition-all ease-in app">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
