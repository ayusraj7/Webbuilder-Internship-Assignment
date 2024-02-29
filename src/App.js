import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import MiddlePart from "./components/MiddlePart";



function App() {
  return (
    <div className="h-auto w-screen bg-[#FBFCFD] overflow-x-hidden">
      <Navbar/>
      <MiddlePart/>
      <Footer/>
    </div>
  );
}

export default App;
