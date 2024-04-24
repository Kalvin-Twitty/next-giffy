import React from 'react';
import ImageSearch from '../components/ImageSearch';

export default function Home() {
  return (
    <div>
      <ImageSearch initialQuery="funny" />  // You can set a default search term here
    </div>
  );
}
