import { useState, lazy, Suspense } from "react";

const AddProductToWishList = lazy(() => {
  return import("./AddProductToWishList");
});

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    priceFormatted: string;
  };
  addToWishList: (arg: number) => Promise<void>;
}

export function ProductItem({ product, addToWishList }: ProductItemProps) {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <span>
        {product.name} &nbsp; {product.priceFormatted}
      </span>
      <button onClick={() => setIsAdding(true)}>Adicionar para favorito</button>
      &nbsp;&nbsp;&nbsp;
      {isAdding && (
        <Suspense fallback={<span>Loading...</span>}>
          <AddProductToWishList
            isAdding={isAdding}
            onCloseRequest={() => setIsAdding(false)}
            onAddProductToWishList={() => addToWishList(product.id)}
          />
        </Suspense>
      )}
    </div>
  );
}
