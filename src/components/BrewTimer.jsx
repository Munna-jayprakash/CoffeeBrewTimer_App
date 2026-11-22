import React from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Thermometer, Minus, Plus } from 'lucide-react';

const BrewTimer = ({
  selectedPreset,
  timeLeft,
  temperature,
  isRunning,
  onTempChange,
  onToggle,
  onReset,
}) => {
  if (!selectedPreset) {
    return (
      <div className="timer-placeholder">
        <p>Select a brew method above to start your countdown.</p>
      </div>
    );
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  const progress =
    ((selectedPreset.duration - timeLeft) / selectedPreset.duration) * 100;

  return (
    <div className="timer-box">
      <div className="timer-header">
        <h2>Brewing: {selectedPreset.name}</h2>
      </div>

      {/* Temperature Controller */}
      <div className="temp-control-bar">
        <Thermometer size={16} color="#d4a373" />
        <span>Water Temp:</span>
        <button
          className="temp-step-btn"
          onClick={() => onTempChange(-1)}
          disabled={temperature <= 80}
          title="Decrease Temperature"
        >
          <Minus size={14} />
        </button>
        <strong className="temp-value">{temperature}°C</strong>
        <button
          className="temp-step-btn"
          onClick={() => onTempChange(1)}
          disabled={temperature >= 100}
          title="Increase Temperature"
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="countdown-display">
        {minutes}:{seconds}
      </div>

      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      {timeLeft === 0 && (
        <div className="brew-complete">
          <CheckCircle2 size={22} color="#81b29a" />
          <span>Brew complete! Saved to your history.</span>
        </div>
      )}

      <div className="timer-controls">
        <button className="btn-primary" onClick={onToggle}>
          {isRunning ? <Pause size={18} /> : <Play size={18} />}
          {isRunning ? 'Pause' : timeLeft === 0 ? 'Done' : 'Resume'}
        </button>
        <button className="btn-secondary" onClick={onReset}>
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default BrewTimer;