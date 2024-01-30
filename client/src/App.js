import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/inventory')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs</h1>
        {products && products.map(product => (
          <div key={product.name}>{product.quantity}</div>
        ))}
      </header>
    </div>
  );
}

export default App;