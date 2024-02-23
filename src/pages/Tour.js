import React from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './Tour.css';

const Tour = () => {
  return (
    <div className="tourContainer">
      <NavBar />
      Take a tour of Uniade 7 Murals with us.  
      <InlineWidget url="https://calendly.com/lindsaybolzwilson" />
      <Footer />
    </div>
  )
}

export default Tour;