// @ts-nocheck — no local React types installed; remove this line if they're added
const { useState, useEffect } = React;

// Types
enum PetMood {
  HAPPY = "Happy",
  EXCITED = "Excited",
  CONTENT = "Content",
  SAD = "Sad",
  TIRED = "Tired",
  SICK = "Sick",
  HUNGRY = "Hungry",
}

enum PetAction {
  EAT = "Eat",
  PLAY = "Play",
  SLEEP = "Sleep",
}

interface PetStats {
  hunger: number;
  happiness: number;
  energy: number;
}

// Data
const MOOD_EMOJI: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😄",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "🙂",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤢",
  [PetMood.HUNGRY]: "😋",
};

export const PetGame = () => {
  const [nameInput, setNameInput] = useState<string>("");
  const [petName, setPetName] = useState<string>("");

  const nameForm = (
    <main className="base-container info-panel">
      <header>
        <h1>Digital Pet</h1>
      </header>

      <form className="start-questions">
        <label htmlFor="pet-name">What's your pet's name?</label>
        <input
          id="pet-name"
          type="text"
          placeholder="Biscuit"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <button id="set-name-btn" type="submit">
          Start
        </button>
      </form>
    </main>
  );

  const petScreen = (
    <main className="base-container">
      <section className="game-container">
        <h2 className="pet-name">{/* TODO: pet name */}</h2>
        <p className="pet-sprite">{/* TODO: mood emoji */}</p>
        <p>{/* TODO: mood text */}</p>
      </section>

      <section className="stats-grid">
        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">🍖</span>
              <span className="stat-name">Hunger</span>
            </span>
            <span className="stat-value">{/* TODO */}</span>
          </div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">🎾</span>
              <span className="stat-name">Happiness</span>
            </span>
            <span className="stat-value">{/* TODO */}</span>
          </div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">⚡</span>
              <span className="stat-name">Energy</span>
            </span>
            <span className="stat-value">{/* TODO */}</span>
          </div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: "0%" }}></div>
          </div>
        </div>
      </section>

      <section className="game-container">
        <div className="pet-buttons">
          <button id="eat-action" className="pet-button" type="button">
            Eat
          </button>
          <button id="play-action" className="pet-button" type="button">
            Play
          </button>
          <button id="sleep-action" className="pet-button" type="button">
            Sleep
          </button>
        </div>
      </section>
    </main>
  );

  // if petName is true show petScreen else if empty show nameForm
  return petName ? petScreen : nameForm;
};
