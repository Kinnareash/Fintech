 import React, { useState } from "react";
 import { Navbar } from "./components/Navbar";
 import { Hero } from "./components/Hero";
 import { Analytics } from "./components/Analytics";
 import { Newsletter } from "./components/Newsletter";
 import { Cards } from "./components/Cards";
 import { BFooter } from "./components/Footer";
 import styles from "./index.css";
 
function App() {
  const [page,setPage] = useState(0);

  return (
    <div className="max-h-fit">
      <Navbar page={page} setPage={setPage} />
       {
      page==0 ? 
      <div className="max-h-fit">
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
   </div> :page==1? 
      <div className="max-h-fit">
      <h1 className="text-white">Company</h1>
   </div>:page==2 ? 
      <div className="max-h-fit">
      <h1 className="text-white">Stocks</h1>
   </div>:page==3 ? 
      <div className="max-h-fit">
      <h1 className="text-white">Portfolio</h1>
   </div>: <div className="max-h-fit">
      <h1 className="text-white">100</h1>
   </div>
    }
    <BFooter/>
    </div>
  );
}

export default App;
