import React from "react";

const TridasaVideo = () => {
  return (
    <>
      {/* INLINE CSS */}
      <style>
        {`
          .video-section {
            text-align: center;
            padding: 20px 10px;
          }

          .video-title {
            font-size: 24px;
            font-weight: 700;
            color: #002954;
            margin-bottom: 8px;
          }

          .video-subtitle {
            font-size: 16px;
            color: #555;
            max-width: 650px;
            margin: 0 auto 20px auto;
            line-height: 1.5;
          }

          .video-wrapper {
            max-width: 900px;
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
          }

          .video-player {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
          }

          @media (max-width: 768px) {
            .video-title {
              font-size: 20px;
            }
            .video-subtitle {
              font-size: 14px;
            }
          }
        `}
      </style>

      {/* VIDEO SECTION */}
      <div className="video-section">

        {/* TITLE */}
        <h2 className="video-title">Project <span style={{ color: '#fea611' }}>Walkthrough</span></h2>

        {/* SUB CAPTION */}
        <p className="video-subtitle">
          Get a glimpse of the lifestyle, amenities, and premium living experience.
        </p>

        {/* VIDEO */}
        <div className="w-full flex justify-center px-4 my-4">
          <div className="video-wrapper">
            <video controls className="video-player">
              <source src="/rise.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </>
  );
};

export default TridasaVideo;
