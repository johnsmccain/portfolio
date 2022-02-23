import { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import "./App.scss";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
