import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./Profile";
import { About } from "./About";
import { Message } from "./Message";

export const Route = () => {
  return (
    <section className="Home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </section>
  );
};
