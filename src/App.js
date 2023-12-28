import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Packs from "./Packs";

function App() {
  return (
    <div className="relative w-[100%] max-w-screen">
      <Navbar />
      <Banner />
      <Packs />
      <Contact />
    </div>
  );
}

export default App;
