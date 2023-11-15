import { useEffect } from "react";
import "./App.css";
import useApp from "./hooks/useApp";
import { Product  } from "./types/types";
// import Product from "./Component/Product/Product";

function App() {
  const { fetchProducts, Addtodo, todo, setInput, products,localProducts } = useApp();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setInput(e.currentTarget.value)} />

        <button onClick={Addtodo}>ADD TODO</button>
    
    
        {todo.map((item) => (
          <li>{item.text}</li>
        ))}
      </div>

      <div>
        {products.length
          ? products.map((item: Product) => (
              <div
                key={item.id}
                style={{
                  width: "20%",
                  margin: "auto",
                  border: "1px solid black",
                  marginBottom: "5px",
                }}
              >
                <h1>{item.title}</h1>
                <p>{item.userId}</p>
                <p>{item.body}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        {/* {
          localProducts.map((item)=>(
       <Product item={item} handleaddToCart={handleaddToCart} />
          ))
        } */}
      </div>
    </div>
  );
}

export default App;
