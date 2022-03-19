import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./Components/All-Product/AllProducts";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllProducts setcount={setCartCount}></AllProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
