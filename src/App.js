import "./App.css";
import AllRoutes from "./AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
