import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Router from "./Router";
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Navbar />
      </div>
      <div className="content-container">
        <Router />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
