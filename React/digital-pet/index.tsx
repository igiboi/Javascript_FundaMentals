// @ts-nocheck — no local React types installed; remove this line if they're added
const { useState, useEffect } = React;

// Types
// Bare member names only: FCC's test regex rejects `= "value"` inside PetMood
enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
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

const clamp = (value: number): number =>
  // floor at 0, then ceiling at 100
  Math.min(Math.max(value, 0), 100);

// First match wins, so the order of these checks is the priority order.
// The spec gives SICK no rule; a starving pet (hunger maxed out) is sick.
const getMood = ({ hunger, happiness, energy }: PetStats): PetMood => {
  if (hunger >= 100) return PetMood.SICK;
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
};

// Maps a 0–100 "goodness" score to the bar colours in styles.css
const getFillLevel = (score: number): string => {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
};

const IDLE_TICK_MS = 3000;
const IDLE_CHANGE = 5;

export const PetGame = () => {
  const [petName, setPetName] = useState<string>("");
  const [stats, setStats] = useState<PetStats>({ hunger: 0, happiness: 100, energy: 100 });

  // Starts only once the pet exists, so stats hold their starting values on the form view
  useEffect(() => {
    if (!petName) return;

    const intervalId = setInterval(() => {
      setStats((previousStats) => ({
        hunger: clamp(previousStats.hunger + IDLE_CHANGE),
        happiness: clamp(previousStats.happiness - IDLE_CHANGE),
        energy: clamp(previousStats.energy + IDLE_CHANGE),
      }));
    }, IDLE_TICK_MS);

    return () => clearInterval(intervalId);
  }, [petName]);

  // Uncontrolled input: FCC's test sets input.value directly, which never fires onChange
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const trimmedName = String(formData.get("petName")).trim();
    if (trimmedName.length === 0) return;

    setPetName(trimmedName);
  };

  const mood = getMood(stats);

  const handleAction = (action: PetAction) => {
    setStats((previousStats) => {
      switch (action) {
        case PetAction.EAT:
          return {
            ...previousStats,
            hunger: clamp(previousStats.hunger - 10),
            energy: clamp(previousStats.energy + 10),
          };

        case PetAction.PLAY:
          return {
            ...previousStats,
            energy: clamp(previousStats.energy - 10),
            happiness: clamp(previousStats.happiness + 10),
          };

        case PetAction.SLEEP:
          return {
            ...previousStats,
            hunger: clamp(previousStats.hunger + 10),
            energy: clamp(previousStats.energy + 10),
          };

        default:
          return previousStats;
      }
    });
  };

  const nameForm = (
    <main className="base-container info-panel">
      <header>
        <h1>Digital Pet</h1>
      </header>

      <form className="start-questions" onSubmit={handleSubmit}>
        <label htmlFor="pet-name">What's your pet's name?</label>
        <input
          id="pet-name"
          name="petName"
          type="text"
          placeholder="Biscuit"
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
        <h2 className="pet-name">{petName}</h2>
        <p className="pet-sprite">{MOOD_EMOJI[mood]}</p>
        {/* Numeric enum: PetMood[mood] reverse-maps 0 → "HAPPY" */}
        <p>Feeling {PetMood[mood].toLowerCase()}</p>
      </section>

      <section className="stats-grid">
        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">🍖</span>
              <span className="stat-name">Hunger</span>
            </span>
            <span className="stat-value">{stats.hunger}</span>
          </div>
          <div className="stat-progress">
            {/* Inverted score: high hunger is bad, so it colours red */}
            <div
              className={`stat-fill ${getFillLevel(100 - stats.hunger)}`}
              style={{ width: `${stats.hunger}%` }}
            ></div>
          </div>
        </div>

        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">🎾</span>
              <span className="stat-name">Happiness</span>
            </span>
            <span className="stat-value">{stats.happiness}</span>
          </div>
          <div className="stat-progress">
            <div
              className={`stat-fill ${getFillLevel(stats.happiness)}`}
              style={{ width: `${stats.happiness}%` }}
            ></div>
          </div>
        </div>

        <div className="stat stat-bar">
          <div className="stat-header">
            <span className="stat-label">
              <span className="stat-icon">⚡</span>
              <span className="stat-name">Energy</span>
            </span>
            <span className="stat-value">{stats.energy}</span>
          </div>
          <div className="stat-progress">
            <div
              className={`stat-fill ${getFillLevel(stats.energy)}`}
              style={{ width: `${stats.energy}%` }}
            ></div>
          </div>
        </div>
      </section>

      <section className="game-container">
        <div className="pet-buttons">
          <button
            id="eat-action"
            className="pet-button"
            type="button"
            onClick={() => handleAction(PetAction.EAT)}
          >
            Eat
          </button>
          <button
            id="play-action"
            className="pet-button"
            type="button"
            onClick={() => handleAction(PetAction.PLAY)}
          >
            Play
          </button>
          <button
            id="sleep-action"
            className="pet-button"
            type="button"
            onClick={() => handleAction(PetAction.SLEEP)}
          >
            Sleep
          </button>
        </div>
      </section>
    </main>
  );

  return petName ? petScreen : nameForm;
};
