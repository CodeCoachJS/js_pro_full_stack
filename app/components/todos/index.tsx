import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface IProps {
  todos: Todo[];
}

export default function Todos({ todos }: IProps): JSX.Element {
  const [todoItems, setTodos] = useState<Todo[]>(todos);

  function removeTodo(id: number) {
    const newTodos = todoItems.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      {todoItems.map((item: Todo) => (
        <div key={item.id}>
          <label htmlFor={item.title}>{item.title}</label>
          <input
            id={item.title}
            onChange={removeTodo.bind(null, item.id)}
            type="checkbox"
            checked={item.completed}
          />
        </div>
      ))}
    </div>
  );
}
