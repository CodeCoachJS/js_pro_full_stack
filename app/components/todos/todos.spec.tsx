import { fireEvent, render } from "@testing-library/react";
import Todos from "~/components/todos";
import "@testing-library/jest-dom";

describe("Todos", () => {
  test("should render", () => {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: "Save world",
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: "Kill bad guys",
        completed: false,
      },
      {
        userId: 3,
        id: 3,
        title: "Walk dog",
        completed: true,
      },
    ];

    const { getByText } = render(<Todos todos={todos} />);

    expect(getByText("Save world")).toBeInTheDocument();
  });

  test("removes a completed todo", () => {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: "Save world",
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: "Kill bad guys",
        completed: false,
      },
      {
        userId: 3,
        id: 3,
        title: "Walk dog",
        completed: true,
      },
    ];

    const { getByLabelText, getAllByRole } = render(<Todos todos={todos} />);

    let allTodos = getAllByRole("checkbox");
    expect(allTodos.length).toBe(3);

    const checkbox = getByLabelText("Save world");

    fireEvent(checkbox, new MouseEvent("click", { bubbles: true }));

    allTodos = getAllByRole("checkbox");
    expect(allTodos.length).toBe(2);
  });
});
