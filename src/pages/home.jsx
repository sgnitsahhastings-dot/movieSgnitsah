import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-white text-4xl mb-4">Welcome</h1>
    <Link to="/movies" className="px-4 py-2 rounded bg-accent text-black">
      Open Movie Cards
    </Link>
  </div>
);

export default Home;
