import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "./productSlice";

const FormProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productSelected);

  const handleSubmit = (formData) => {
    //console.log(`adding ${formData.get("name")}`);
    const name = formData.get("name");
    const price = formData.get("price");
    if (name == "" || isNaN(price)) return;

    if (product == undefined) dispatch(addProduct({ name, price }));
    else {
      const id = product.id;
      dispatch(editProduct({ id, name, price }));
    }
  };
  return (
    <>
      <hr />
      <h2 style={{textAlign:"center"}}>Ajouter un produit</h2>
      <form action={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom du Produit"
          defaultValue={product == undefined ? "" : product.name}
        />
        <input
          type="number"
          name="price"
          defaultValue={product == undefined ? 0 : product.price}
        />
        <button
          type="submit"
          className={
            product == undefined ? "btn btn-success" : "btn btn-warning"
          }
        >
          {product == undefined ? "Ajouter" : "Modifier"}
        </button>
      </form>
    </>
  );
};
export default FormProduct;
