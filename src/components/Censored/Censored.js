"use client";

import React from "react";
import { trigger, censored } from "./Censored.module.css";

function Censored({ children }) {
  return (
    <button
      className={`${trigger} ${censored}`}
      onClick={(e) => {
        e.target.classList.toggle(censored);
      }}
    >
      {children}
    </button>
  );
}

export default Censored;
