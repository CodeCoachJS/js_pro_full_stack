import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Todos from "~/components/todos";

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return json(await res.json());
}

export default function TodoRoute() {
  const todos = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Stuff I need to do</h1>
      <div>
        <Todos todos={todos} />
      </div>
    </div>
  );
}
