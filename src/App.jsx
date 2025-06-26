import "./index.css";
import Header from "./components/Header.jsx";
import MiddleBody from "./components/MiddleBody.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <MiddleBody />
      <Footer />
    </div>
  );
}

export default App;