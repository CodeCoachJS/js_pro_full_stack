import { useLoaderData } from "@remix-run/react";
import ProductList from "~/components/productList";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
}

export default function Shop() {
  const items = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ProductList items={items} />
    </div>
  );
}
