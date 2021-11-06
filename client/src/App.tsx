import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setData(data.message));
    console.log(data);
  });
  return <div className='App'>{data ? data : 'Loading...'}</div>;
}

export default App;
