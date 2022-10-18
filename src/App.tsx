import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ShopProvider } from "./context/ShopContextProvider"

function App() {

  return (
    <ShopProvider>
      <Navbar />
      <Routes>
        <Route path="/React_Shop_App/" element={<Home />} />
        <Route path="/React_Shop_App/store" element={<Store />} />
        <Route path="/React_Shop_App/about" element={<About />} />
      </Routes>
      <Footer />
    </ShopProvider>
  )
}

export default App