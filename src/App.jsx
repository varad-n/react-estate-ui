import Navbar from "./components/Navbar"
import "./layout.scss"
import HomePage from "./routes/homepage/homePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App