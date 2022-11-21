import { React } from "react";
import Nav from "./components/Nav"
import CoinTable from "./components/CoinTable";
import Footer from "./components/Footer";


export default function App() {

  return (
    <div>
      <Nav />
      <CoinTable />
      <Footer />
    </div>
  )
}