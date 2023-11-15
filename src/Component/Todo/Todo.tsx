import React, { useState } from "react";
import useApp from "../../hooks/useApp";
import { Item } from "../../types/types";


function Todo() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Item[]>([]);
  const {Addtodo} = useApp();
  // const Addtodo = () => {
  //   const newTodo: Item = { text: input, id: Date.now() };
  //   setTodo([...todo, newTodo]);
  // };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.currentTarget.value)} />

      <button onClick={Addtodo}>ADD TODO</button>
      {todo.map((item) => (
        <li>{item.text}</li>
      ))}
    </div>
  );
}

export default Todo;
