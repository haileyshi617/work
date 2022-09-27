import React, { useEffect, useState } from 'react';

export default function ProgressiveImg({ imgSrc, previewSrc, alt }) {
  const [usedSrc, setUsedSrc] = useState(previewSrc);
  const [usedEffectStyle, setUsedEffectStyle] = useState({
    filter: 'blur(5px)',
    clipPath: 'inset(0)',
  });

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setUsedSrc(img.src);
      setUsedEffectStyle({});
    };
  });

  return (
    <img
      src={usedSrc}
      alt={alt}
      style={{ transition: 'filter 0.1s ease-out', ...usedEffectStyle }}
    />
  );
}
