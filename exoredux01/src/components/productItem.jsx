import { useDispatch } from "react-redux";
import { deleteProduct, setProduct } from "./productSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const price = parseFloat(product.price).toFixed(2);

  return (
    <>
      <b>{product.name}</b>
      <b>{price}€</b>
      <div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => dispatch(setProduct(product.id))}
        >
          Modifier
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteProduct(product.id))}
        >
          Supprimer
        </button>
      </div>
    </>
  );
};
export default ProductItem;
