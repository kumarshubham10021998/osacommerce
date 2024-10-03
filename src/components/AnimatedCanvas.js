// app/page.js (or wherever you want to use it)

import Image from "next/image"; // Import the Image component
import coverImg from './assets/img/download.png'; // Adjust the import path

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center mt-10">
        Unified Visibility and AI-Driven Cloud Solutions
      </h1>
      <p className="text-lg text-center mt-4 px-4 max-w-4xl ">
        The Osa Collaborative Visibility Platform delivers speed, accuracy, and transparency to your entire supply chain so you and your partners are always in lock-step—from sourcing to delivery.
      </p>
      <div className="mt-10">
        <Image
          src={coverImg} // Use the imported image variable
          alt="Cover Image"
          width={800} // Set desired width
          height={300} // Set desired height
          className="rounded-lg" // Optional: Add classes for styling
        />
      </div>
    </div>
  );
}
