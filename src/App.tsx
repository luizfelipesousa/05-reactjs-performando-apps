import React, { FormEvent, useCallback, useState } from "react";
import { ListProduct } from "./components/ListProducts";

type Product = {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
};

type Results = {
  products: Product[];
  totalPrice: number;
};

function App() {
  const [results, setResults] = useState<Results>({
    products: [],
    totalPrice: 0,
  });
  const [search, setSearch] = useState("");

  function formatPrice(price: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!!search.trim()) {
      const response = await fetch(`http://localhost:3333/product?q=${search}`);

      const data: Product[] = await response.json();

      data.map((product) => {
        product.priceFormatted = formatPrice(product.price);
      });

      const totalPrice = data.reduce((total, product) => {
        return total + product.price;
      }, 0);

      setResults({ products: data, totalPrice });
    }
  }

  const addToWishListFunction = async (id: number) => {
    return console.log(id);
  };

  const addToWishList = useCallback(addToWishListFunction, []);

  return (
    <div>
      <h1>Pesquisa de Produtos</h1>
      <form onSubmit={(event) => handleSearch(event)}>
        <input
          type="text"
          name="product"
          id="product"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button type="submit">Buscar</button>
      </form>

      <ListProduct data={results} addToWishList={addToWishList} />
    </div>
  );
}

export default App;
