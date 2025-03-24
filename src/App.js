import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

  const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
  }, {
    id: 1,
    name: 'Cheese',
    count: 5,
  }, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  }];
function App() {
    const [
      products,
      setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
      const productsList = products.map((product) => {
        if (product.id == productId) {
          return {...product, count: product.count + 1};
        } else {
          return product;
        }
      })
      setProducts(productsList);
    }

    function handleDecreaseClick(productId) {
      const productsList = products.map((product) => {
        if (product.id == productId) {
          return {...product, count: product.count - 1};
        } else {
          return product;
        }
      })
      setProducts(productsList);
    }

    return (
      <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
    );
  }

export default App;