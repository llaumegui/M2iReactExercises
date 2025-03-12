import { useSelector } from "react-redux";
import ProductItem from "./productItem";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <b>Name</b>
        <b>Price</b>
        <b>Actions</b>
      </div>
      <hr />
      <div>
        {products.map((p) => (
            <div style={{display:"flex", justifyContent:"space-between"}}>
          <ProductItem product={p} key={p.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
