import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import DetailsCard from "./components/ProductCardDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/:title" element={<DetailsCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
