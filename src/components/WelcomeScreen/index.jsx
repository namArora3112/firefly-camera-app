// WelcomeScreen.jsx
import React from "react";
import "./index.css";
import useDeviceOrientation from "../../hooks/useDeviceOrientation";

const WelcomeScreen = ({
  onTakePicture,
  onUploadImage,
  //  onUploadURL
}) => {

  const orientation = useDeviceOrientation();
  

  return (
    <div className="welcome-screen">
      <h1>Adobe FireflyCam</h1>
      <h1>Current Orientation: {orientation}</h1>

      <h2>Welcome to the Firefly Camera App</h2>
      <div className="cta-container">
        <button className="cta-button" onClick={onTakePicture}>
          Take a picture
        </button>
        <button className="cta-button" onClick={onUploadImage}>
          Upload image
        </button>
        {/* <button className="cta-button" onClick={onUploadURL}>
          Upload via URL
        </button> */}
      </div>
    </div>
  );
};

export default WelcomeScreen;
