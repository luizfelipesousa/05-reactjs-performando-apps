import { memo } from "react";
import { ProductItem } from "./ProductItem";
import { AutoSizer, List, ListRowProps } from "react-virtualized";

interface Product {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
}

interface ListProductsProps {
  data: {
    products: Product[];
    totalPrice: number;
  };
  addToWishList: (arg: number) => Promise<void>;
}

const ListProductFunction = ({ data, addToWishList }: ListProductsProps) => {
  function rowRenderer({ key, index, style }: ListRowProps) {
    return (
      <div style={style}>
        <ProductItem
          product={data.products[index]}
          key={key}
          addToWishList={addToWishList}
        />
      </div>
    );
  }

  return (
    <div>
      <h2>{data.totalPrice}</h2>

      <List
        width={900}
        height={700}
        rowCount={data.products.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
        overscanRowCount={5}
      />
      {/* {data.products.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            addToWishList={addToWishList}
          />
        );
      })} */}
    </div>
  );
};

export const ListProduct = memo(ListProductFunction, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
