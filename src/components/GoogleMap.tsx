
import React from 'react';

interface GoogleMapProps {
  address: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, height = "400px" }) => {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default GoogleMap;
