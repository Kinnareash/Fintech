 import React from "react";
 import { Navbar } from "./components/Navbar";
 import { Hero } from "./components/Hero";
 import { Analytics } from "./components/Analytics";
 import { Newsletter } from "./components/Newsletter";
 import { Cards } from "./components/Cards";
 import { BFooter } from "./components/Footer";
 import styles from "./index.css";
 
function App() {
  return (
    <div className="max-h-fit">
       <Navbar/>
       <Hero/>
       <Analytics/>
       <Newsletter/>
       <Cards/>
       <BFooter/>
    </div>
  );
}

export default App;
