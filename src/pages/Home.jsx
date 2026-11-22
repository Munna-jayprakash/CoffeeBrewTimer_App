import React from 'react';
import { BREW_PRESETS } from '../data/presets';
import PresetCard from '../components/PresetCard';
import BrewTimer from '../components/BrewTimer';
import CoffeeBeansBackground from '../components/CoffeeBeansBackground';

const Home = ({
  selectedPreset,
  timeLeft,
  temperature,
  isRunning,
  onSelectPreset,
  onTempChange,
  onToggle,
  onReset,
}) => {
  return (
    <main className="home-container">
      <CoffeeBeansBackground />

      <section className="hero-text">
        <h1>Dial In Your Daily Brew</h1>
        <p>Tap a brewing method below to immediately start its extraction timer.</p>
      </section>

      <section className="presets-grid">
        {BREW_PRESETS.map((preset) => (
          <PresetCard
            key={preset.id}
            preset={preset}
            isSelected={selectedPreset?.id === preset.id}
            onSelect={onSelectPreset}
          />
        ))}
      </section>

      <BrewTimer
        selectedPreset={selectedPreset}
        timeLeft={timeLeft}
        temperature={temperature}
        isRunning={isRunning}
        onTempChange={onTempChange}
        onToggle={onToggle}
        onReset={onReset}
      />
    </main>
  );
};

export default Home;