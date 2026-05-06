import { useMemo, useState } from 'react';

const NUM_POSITIONS = 11;
const NUM_CHARACTERS = 20;

function pickPermutation(positions: number, characters: number): number[] {
  const pool = Array.from({ length: characters }, (_, i) => i);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, positions);
}

export default function App() {
  const [seed, setSeed] = useState(0);

  const permutation = useMemo(
    () => pickPermutation(NUM_POSITIONS, NUM_CHARACTERS),
    [seed],
  );

  return (
    <div className="app">
      <h1>Character Permutations</h1>
      <button onClick={() => setSeed((s) => s + 1)}>Randomize</button>
      <div className="stage">
        <div className="grid">
          {permutation.map((char, position) => (
            <img
              key={position}
              src={`${import.meta.env.BASE_URL}chars/${position}/${char}.png`}
              alt={`position ${position}, character ${char}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
