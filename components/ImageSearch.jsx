import React, { useState, useEffect } from 'react';

function ImageSearch({ initialQuery }) {
  const [imgSrc, setImgSrc] = useState('');
  const [alt, setAlt] = useState('');

  const fetchImage = (query = initialQuery) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=StGEROY7n963OaOR3Cn3JMMHPbNnEXwo&tag=${encodedQuery}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch data');
      })
      .then(({ data }) => {
        setImgSrc(data.images.fixed_width.url);
        setAlt(data.title);
      })
      .catch((error) => {
        console.error('Something went wrong', error);
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchImage(evt.target.query.value);
  };

  useEffect(() => {
    fetchImage();
  }, [initialQuery]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 max-w-md w-full bg-gray-800 rounded shadow-lg">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="query" className="block text-sm font-medium text-gray-300">Enter a word or phrase:</label>
            <input type="text" placeholder="Search GIF" name="query" id="query"
              className="mt-1 p-2 w-full border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-700 text-white"
            />
          </div>
          <button type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Search
          </button>
        </form>
        {imgSrc && (
          <div className="image-container text-center">
            <img src={imgSrc} alt={alt} className="mx-auto" />
            <p className="text-sm text-gray-400 mt-2">{alt || 'No description'}</p>
          </div>
        )}
      </div>
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md">
        <ul className="flex justify-center space-x-4">
          <li><a href="/" className="text-purple-500 hover:text-purple-700 px-3 py-2">Home</a></li>
          <li><a href="/about" className="text-purple-500 hover:text-purple-700 px-3 py-2">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default ImageSearch;
