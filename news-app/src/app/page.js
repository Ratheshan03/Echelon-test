"use client"; // Ensure this is client-side

import News from "./news"; // Import the News component
import Countries from "./countries"; // Import the Countries component

export default function Home() {
  return (
    <div className="p-6">
      {" "}
      {/* Add padding around the components */}
      <News /> {/* Render the News component */}
      <Countries /> {/* Render the Countries component */}
    </div>
  );
}
