export interface AddProductToWishListProps {
  onAddProductToWishList: () => Promise<void>;
  onCloseRequest: () => void;
  isAdding: boolean;
}

export default function AddProductToWishList({
  onAddProductToWishList,
  onCloseRequest,
  isAdding,
}: AddProductToWishListProps) {
  return (
    <span>
      {isAdding && (
        <>
          Deseja adicionar aos favoritos?&nbsp;&nbsp;&nbsp;
          <button onClick={onAddProductToWishList}>Sim</button>
          <button onClick={onCloseRequest}>Não</button>
        </>
      )}
    </span>
  );
}
