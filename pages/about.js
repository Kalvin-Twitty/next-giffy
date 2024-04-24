import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 max-w-md w-full bg-gray-800 rounded shadow-lg">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-300">
          Welcome to our GIF app, where you can search and find amazing GIFs for every mood and occasion.
          Our mission is to make it easy and fun for everyone to express themselves through GIFs.
        </p>
        <p className="mt-2 text-gray-300">
          This application uses the Giphy API to fetch a wide variety of GIFs. Start by searching for any keyword
          and enjoy endless streams of GIF animations to share and enjoy.
        </p>
      </div>
    </div>
  );
}
