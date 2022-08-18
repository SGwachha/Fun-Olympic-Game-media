import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import "./App.css"
import Signup from "./component/signUp/SignUp";
import Login from "./component/login/Login";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Navbar />
      </div>
      <div className="content-container">
        {/* <Signup /> */}
        <Login />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
