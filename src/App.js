import React, { useState, useEffect } from 'react';
import './App.css'; // You can keep your custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap CSS

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data inside the useEffect hook
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.images[0]} className="card-img-top" alt={`${product.title} - Image 1`} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
