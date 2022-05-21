import React from "react";
import { useSelector, useDispatch } from "../redux/store";
import { delCart } from "../redux/actions";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  //dispatch action to delete product
  const deleteProduct = (product) => {
    dispatch(delCart(product));
  };

  return (
    <div>
      <div className="container mt-5">
        {state.map((product) => {
          return (
            <>
              <div className="row mb-5" key={product.id}>
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => deleteProduct(product)}
                  >
                    {" "}
                    Remove Item
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
