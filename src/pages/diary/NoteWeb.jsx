import React, { useState } from "react";
import diaSrc from "../../assets/svg/dia.svg";
import heartSrc from "../../assets/svg/heart.svg";
import hatSrc from "../../assets/svg/hat.svg";

const NoteWeb = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imageSrc) => {
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, imageSrc]);
  };

  const imageList = [
    diaSrc,
    heartSrc,
    hatSrc,
    // 추가적인 이미지 경로를 배열에 추가
  ];

  return (
    <div>
      <div className="note-shape" style={{ width: "200px", height: "200px", backgroundColor: "#000000" }}>
        {selectedImages.map((selectedImage, index) => (
          <img key={index} src={selectedImage} alt={`Selected Image ${index + 1}`} />
        ))}
      </div>
      <div className="image-list">
        {imageList.map((imageSrc, index) => (
          <div key={index}>
            <img
              src={imageSrc}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(imageSrc)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteWeb;

