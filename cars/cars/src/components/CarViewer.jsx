import React from "react";

function CarViewer() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <iframe
        title="Tesla Model P100D"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/26ef15adc5ee4d8bbcb4a4f95ca49168/embed?ui_theme=dark"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default CarViewer;

