import { useState } from 'react';

export default function App() {
  return (
    <>
      <h1>The Mobile News</h1>

      <Counter />
      <Adsense />


    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 20)}>
      Watch Ads {count} 
    </button>

  );
}
