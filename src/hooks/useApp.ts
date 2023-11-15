import React, { useState } from "react";
import { Item, Product,IProduct } from "./../types/types";

const useApp = () => {
  const [input, setInput] = React.useState<string>("");
  const [todo, setTodo] = React.useState<Item[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [localProducts,setLocalProducts]=useState<IProduct[]>([
    {
      name:'sameer',
      id:12,
      age:12,
      gender:'male'
    },
    {
      name:'ahsan',
      id:12,
      age:12,
      gender:'male'
    },
    {
      name:'Khatmal',
      id:13,
      age:12,
      gender:'female'
    },
  ])

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result: Promise<Product[]> = await response.json();
      setProducts(await result);
    } catch (error) {
      console.log("fetch products prmoise failed");
    }
  };

  const Addtodo = () => {
    const newTodo: Item = { text: input, id: Date.now() };
    setTodo([...todo, newTodo]);
  };

  return { fetchProducts, Addtodo, todo, products, setInput,localProducts };
};

export default useApp;
