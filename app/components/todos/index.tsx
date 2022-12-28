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
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          {todoItems.map((item: Todo) => (
            <div key={item.id}>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">{item.title}</p>

                <button
                  onClick={removeTodo.bind(null, item.id)}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
