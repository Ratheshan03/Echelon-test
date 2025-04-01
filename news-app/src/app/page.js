"use client";

import News from "./news";
import Countries from "./countries";

export default function Home() {
  return (
    <div className="p-6">
      <News /> 
      <Countries /> 
    </div>
  );
}
