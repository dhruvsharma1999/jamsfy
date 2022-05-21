// adding item to cart

export const addCart = (product) => {
  return {
    type: "ADDCARTITEM",
    payload: product,
  };
};

// rmoving  item to cart

export const delCart = (product) => {
  return {
    type: "REMOVECARTITEM",
    payload: product,
  };
};
