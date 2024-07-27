"use client";

import React from "react";
import Navbar from "../components/Navbar";
import CardContainer from "../components/Card/CardContainer";

export default function Page() {
  return (
    <div className="container px-xl">
      <Navbar />
      <CardContainer />
    </div>
  );
}
