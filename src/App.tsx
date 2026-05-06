import { useMemo, useState } from 'react';

const NUM_POSITIONS = 11;
const NUM_CHARACTERS = 20;

export default function App() {
  const [seed, setSeed] = useState(0);

  const permutation = useMemo(
    () =>
      Array.from({ length: NUM_POSITIONS }, () =>
        Math.floor(Math.random() * NUM_CHARACTERS),
      ),
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
