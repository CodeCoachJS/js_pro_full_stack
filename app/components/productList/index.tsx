import { useState } from "react";
type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

interface IProps {
  items: Item[];
}

export default function ProductList({ items }: IProps): JSX.Element {
  const [total, setTotal] = useState(0);

  function purchaseItem(price: number) {
    setTotal(total + price);
  }

  return (
    <div>
      <h2 data-cy="totalPrice">Total: {total.toFixed(2)}</h2>
      {items.map((item: Item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img width={100} src={item.image} alt={item.title} />
          <p data-cy="itemPrice">{item.price}</p>
          <button onClick={purchaseItem.bind(null, item.price)}>
            Purchase
          </button>
        </div>
      ))}
    </div>
  );
}
