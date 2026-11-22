import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import './App.css';

function App() {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [temperature, setTemperature] = useState(93);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('brewHistory')) || [];
  });

  useEffect(() => {
    localStorage.setItem('brewHistory', JSON.stringify(history));
  }, [history]);

  // 1. Countdown interval
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // 2. Log brew once when timer reaches 0
  useEffect(() => {
    if (isRunning && timeLeft === 0 && selectedPreset) {
      setIsRunning(false);
      const newEntry = {
        id: Date.now(),
        method: selectedPreset.name,
        duration: selectedPreset.duration,
        temp: temperature,
        timestamp: new Date().toLocaleString([], {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
      };
      setHistory((prevHistory) => [newEntry, ...prevHistory]);
    }
  }, [timeLeft, isRunning, selectedPreset, temperature]);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setTimeLeft(preset.duration);
    setTemperature(preset.temp); // Sets default temp for that brew method
    setIsRunning(true);
  };

  const handleTempChange = (delta) => {
    setTemperature((prev) => Math.min(100, Math.max(80, prev + delta)));
  };

  const handleToggleTimer = () => {
    if (timeLeft > 0) setIsRunning((prev) => !prev);
  };

  const handleResetTimer = () => {
    if (selectedPreset) {
      setTimeLeft(selectedPreset.duration);
      setTemperature(selectedPreset.temp);
      setIsRunning(false);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('brewHistory');
  };

  return (
    <Router>
      <div className="app-shell">
        <Navbar historyCount={history.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedPreset={selectedPreset}
                timeLeft={timeLeft}
                temperature={temperature}
                isRunning={isRunning}
                onSelectPreset={handleSelectPreset}
                onTempChange={handleTempChange}
                onToggle={handleToggleTimer}
                onReset={handleResetTimer}
              />
            }
          />
          <Route
            path="/history"
            element={<History history={history} onClearHistory={handleClearHistory} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;