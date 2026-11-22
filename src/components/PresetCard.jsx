// src/components/PresetCard.jsx
import React from 'react';
import { Clock, Thermometer } from 'lucide-react';

const PresetCard = ({ preset, isSelected, onSelect }) => {
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return mins > 0 ? `${mins}m ${remSecs > 0 ? `${remSecs}s` : ''}` : `${remSecs}s`;
  };

  return (
    <div
      className={`preset-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(preset)}
    >
      <div className="card-img-wrapper">
        <img src={preset.image} alt={preset.name} />
      </div>
      <div className="card-content">
        <h3>{preset.name}</h3>
        <p className="ratio">{preset.ratio}</p>
        <div className="card-meta">
          <span>
            <Clock size={14} /> {formatTime(preset.duration)}
          </span>
          <span>
            <Thermometer size={14} /> {preset.temp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresetCard;