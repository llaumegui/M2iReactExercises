import { createSlice, nanoid } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [{ id: 0, name: "test", price: 0.0 }],
    productSelected: undefined,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: nanoid(),
        name: action.payload.name,
        price: action.payload.price,
      };
      console.log(action.payload);
      state.products.push(newProduct);
    },
    deleteProduct: (state, action) => {
      if (state.productSelected!=undefined && action.payload == state.productSelected.id)
        state.productSelected = undefined;

      state.products = state.products.filter((p) => p.id != action.payload);
    },
    editProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (p) => p.id == action.payload.id
      );
      state.products[productIndex].name = action.payload.name;
      state.products[productIndex].price = action.payload.price;

      state.productSelected = undefined;
    },
    setProduct: (state, action) => {
      state.productSelected = state.products.find(
        (p) => p.id == action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct, editProduct, setProduct } =
  productSlice.actions;
export default productSlice.reducer;
